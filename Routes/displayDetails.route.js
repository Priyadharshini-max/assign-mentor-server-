const express = require("express");
const router = express.Router();
const displaydetailsService = require("../Services/displayDetails.service");

router.get("/displaydetails", displaydetailsService.displayDetails);

module.exports = router;