const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

// 📌 Add daily attendance
router.post("/mark", async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;

    const existing = await Attendance.findOne({ employeeId, date });
    if (existing) {
      return res.status(400).json({ message: "Already marked for this date" });
    }

    const attendance = new Attendance({ employeeId, date, status });
    await attendance.save();

    res.status(201).json({ message: "Attendance marked", attendance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 Get monthly summary
router.get("/summary/:employeeId/:year/:month", async (req, res) => {
  try {
    const { employeeId, year, month } = req.params;

    const startDate = new Date(`${year}-${month}-01`);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    const summary = await Attendance.aggregate([
      {
        $match: {
          employeeId: employeeId,
          date: { $gte: startDate, $lt: endDate }
        }
      },
      {
        $group: {
          _id: null,
          totalPresent: {
            $sum: { $cond: [{ $eq: ["$status", "present"] }, 1, 0] }
          },
          totalAbsent: {
            $sum: { $cond: [{ $eq: ["$status", "absent"] }, 1, 0] }
          },
          totalLeave: {
            $sum: { $cond: [{ $eq: ["$status", "leave"] }, 1, 0] }
          }
        }
      }
    ]);

    if (summary.length === 0) {
      return res.status(404).json({ message: "No records found" });
    }

    res.json({
      employeeId,
      year,
      month,
      ...summary[0]
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
