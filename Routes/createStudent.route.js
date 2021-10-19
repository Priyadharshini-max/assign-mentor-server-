const express = require("express");
const router = express.Router();
const studentService = require("../Services/createStudent.service");

router.post("/createstudent", studentService.createstudent);
router.get("/getstudents", studentService.displayStudents);

module.exports = router;