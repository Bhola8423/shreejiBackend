const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const Teacher = require('../models/TeacherApplication');


router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const data = {
      ...req.body,
      resume: req.file ? req.file.path : null,
    };

    const teacher = new Teacher(data);
    await teacher.save();

    res.status(201).json({
      status: "success",
      message: "Application submitted",
      data: teacher
    });
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate key error
      const duplicatedField = Object.keys(err.keyValue)[0];
      return res.status(409).json({
        status: "error",
        message: `${duplicatedField} already exists`
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
  const Teachers = await Teacher.find();
  res.json({ status: "success", data: Teachers });
});



module.exports = router;