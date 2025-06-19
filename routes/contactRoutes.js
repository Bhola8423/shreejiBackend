const express = require('express');
const router = express.Router();
const ContactInquiry = require('../models/ContactInquiry');

// POST - Submit contact form
router.post('/', async (req, res) => {
  try {
    const contact = new ContactInquiry(req.body);
    await contact.save();

    res.status(201).json({
      status: "success",
      message: "Inquiry submitted",
      data: contact
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});

// GET - View all contact inquiries
router.get('/', async (req, res) => {
  const inquiries = await ContactInquiry.find().sort({ inquiredAt: -1 });
  res.json({ status: "success", data: inquiries });
});

module.exports = router;
