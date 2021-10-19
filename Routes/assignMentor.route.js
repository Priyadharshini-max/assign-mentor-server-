const express = require("express");
const router = express.Router();

const assignmentorService = require("../Services/assignMentor.service");

router.post("/assignmentor", assignmentorService.assignmentor);

module.exports = router;