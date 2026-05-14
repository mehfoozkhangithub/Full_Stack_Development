const mongoose = require('mongoose');
const crypto = require('crypto');

function generateStudentId(name, batchYear) {
  // Generate 3 random bytes (6 hex characters)
  const randomPart = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `STU-${name}-${batchYear}-${randomPart}`; // Example: STU-affan-2024-A1B2C3
}

const idCard_Schema = mongoose.Schema(
  {
    id_Card_No: {
      type: String,
      unique: true,
    },
    student_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  },
  { versionKey: false },
);

idCard_Schema.pre('save', async function () {
  await this.populate('student_ID');

  const batch = this.student_ID.batch;
  const name = this.student_ID.name;

  this.id_Card_No = generateStudentId(name, batch);
});

const idCard_model = mongoose.model('IdCard', idCard_Schema);

module.exports = { idCard_model };
