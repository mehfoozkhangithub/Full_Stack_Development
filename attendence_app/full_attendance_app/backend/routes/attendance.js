const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

router.post("/mark", async (req, res) => {
  const { employeeId, date, status } = req.body;
  try {
    const existing = await Attendance.findOne({ employeeId, date });
    if (existing) return res.status(400).json({ message: "Already marked" });
    const newRecord = new Attendance({ employeeId, date, status });
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/summary/:employeeId/:year/:month", async (req, res) => {
  const { employeeId, year, month } = req.params;
  try {
    const startDate = new Date(`${year}-${month}-01`);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    const summary = await Attendance.aggregate([
      { $match: { employeeId, date: { $gte: startDate, $lt: endDate } } },
      {
        $group: {
          _id: null,
          present: { $sum: { $cond: [{ $eq: ["$status", "present"] }, 1, 0] } },
          absent: { $sum: { $cond: [{ $eq: ["$status", "absent"] }, 1, 0] } },
          leave: { $sum: { $cond: [{ $eq: ["$status", "leave"] }, 1, 0] } }
        }
      }
    ]);

    if (summary.length === 0) return res.status(404).json({ message: "No records" });
    res.json(summary[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
