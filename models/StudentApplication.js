const mongoose = require('mongoose');

const studentApplicationSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  parentName: String,
  className: { type: String, required: true },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  preferredTime: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: String,
  additionalRequirement: String,
  appliedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StudentApplication', studentApplicationSchema);
