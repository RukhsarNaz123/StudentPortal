const express = require("express");
const {
  updateStudentInfo,
  // updateTeacherInfo,
} = require("../controllers/adminController");
const router = express.Router();

router.post("/:studentId", updateStudentInfo);
// router.post(":/teacherId", updateTeacherInfo);

module.exports = router;
