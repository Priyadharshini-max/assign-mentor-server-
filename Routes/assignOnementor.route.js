const express = require("express");
const router = express.Router();

const assignOnementorService = require("../Services/assignOnementor.service");

router.post("/assignonementor", assignOnementorService.assignOnementor)
router.get("/getallstudents", assignOnementorService.getallStudents)

module.exports = router;