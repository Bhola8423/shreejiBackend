const mongoose = require('mongoose');

const teacherApplicationSchema = new mongoose.Schema({
  fullName: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  subject: String,
  qualification: String,
  experience: String,
  availability: String,
  expectedSalary: String,
  address: String,
  motivation: String,
  resume: String,
  appliedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TeacherApplication', teacherApplicationSchema);
