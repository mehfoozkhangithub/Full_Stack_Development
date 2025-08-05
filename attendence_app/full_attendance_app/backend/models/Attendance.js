const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employeeId: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["present", "absent", "leave"], required: true }
});

module.exports = mongoose.model("Attendance", attendanceSchema);
