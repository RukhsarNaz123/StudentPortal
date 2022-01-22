const express = require("express");
const { updateCourse } = require("../controllers/courseController");

const {
  updateStudentInfo,
  // updateTeacherInfo,
} = require("../controllers/adminController");
const { getUserDetails } = require("../controllers/authController");
const { addCourse } = require("../controllers/courseController");
const {
  fetchAllStudents,
  updateStudent,
} = require("../controllers/studentController");
const router = express.Router();

router.post("/updateStudent/:studentId", updateStudentInfo);
// router.post(":/teacherId", updateTeacherInfo);
router.get("/:adminId", getUserDetails);
router.post("/addCourse", addCourse);
router.get("/allStudents", fetchAllStudents);
router.patch("/updateCourse", updateCourse);
router.patch("/updateStudent", updateStudent);
module.exports = router;
