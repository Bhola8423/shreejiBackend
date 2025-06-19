const mongoose = require('mongoose');

const contactInquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  inquiryType: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  inquiredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ContactInquiry', contactInquirySchema);
