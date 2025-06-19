const express = require('express');
const router = express.Router();
const Student = require('../models/StudentApplication');

// POST - Submit student form
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();

    res.status(201).json({
      status: "success",
      message: "Student application submitted",
      data: student
    });
  } catch (err) {
    if (err.code === 11000) {
      const field = Object.keys(err.keyValue)[0];
      return res.status(409).json({
        status: "error",
        message: `${field} already exists`
      });
    }

    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});

// GET - All student applications
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.json({ status: "success", data: students });
});

module.exports = router;
