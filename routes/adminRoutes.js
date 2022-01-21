const express = require("express");
const {
  updateStudentInfo,
  // updateTeacherInfo,
} = require("../controllers/adminController");
const { getUserDetails } = require("../controllers/authController");
const router = express.Router();

router.post("/updateStudent/:studentId", updateStudentInfo);
// router.post(":/teacherId", updateTeacherInfo);
router.get("/:adminId", getUserDetails);
module.exports = router;
