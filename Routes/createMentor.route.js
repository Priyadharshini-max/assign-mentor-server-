const express = require("express");
const router = express.Router();

const mentorService = require("../Services/createMentor.service");

router.post("/creatementor", mentorService.creatementor);
router.get("/getmentors", mentorService.displayMentors);

module.exports = router;