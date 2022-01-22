const express = require("express");
const { getUserDetails } = require("../controllers/authController");
const {
  fetchAllStudents,
  fetchEnrolledStudents,
} = require("../controllers/studentController");
const router = express.Router();

router.get("/", fetchAllStudents);
router.get("/:studentId", getUserDetails);
router.post("/EnrolledStudents", fetchEnrolledStudents);

module.exports = router;
