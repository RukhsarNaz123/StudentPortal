const express = require("express");
const {
  getStudentDetails,
  updateInfo,
} = require("../controllers/studentController");
const router = express.Router();

router.route("/:studentId").post(updateInfo).get(getStudentDetails);
module.exports = router;
