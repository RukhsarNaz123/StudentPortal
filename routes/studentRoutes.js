const express = require("express");
const {
  getStudentDetails,
  fetchAllStudents,
} = require("../controllers/studentController");
const router = express.Router();

router.get("/", fetchAllStudents);
router.route("/:studentId").get(getStudentDetails);
module.exports = router;
