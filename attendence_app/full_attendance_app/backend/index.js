require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cron = require("node-cron");

const attendanceRoutes = require("./routes/attendance");
const employeeRoutes = require("./routes/employee");
const Attendance = require("./models/Attendance");
const Employee = require("./models/Employee");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("MongoDB error:", err));

app.use("/api/attendance", attendanceRoutes);
app.use("/api/employees", employeeRoutes);

// Auto-mark absent at 11:59 PM every day
cron.schedule("59 23 * * *", async () => {
  const today = new Date().toISOString().slice(0, 10);
  const employees = await Employee.find();
  const marked = await Attendance.find({ date: new Date(today) });
  const markedIds = new Set(marked.map((a) => a.employeeId));

  const bulk = employees
    .filter(e => !markedIds.has(e.employeeId))
    .map(e => ({
      updateOne: {
        filter: { employeeId: e.employeeId, date: new Date(today) },
        update: { employeeId: e.employeeId, date: new Date(today), status: "absent" },
        upsert: true
      }
    }));

  if (bulk.length) {
    await Attendance.bulkWrite(bulk);
    console.log("✅ Auto-filled absent employees for", today);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
