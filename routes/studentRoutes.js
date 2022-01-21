const express = require("express");
const { getUserDetails } = require("../controllers/authController");
const { fetchAllStudents } = require("../controllers/studentController");
const router = express.Router();

router.get("/", fetchAllStudents);
router.get("/:studentId", getUserDetails);
module.exports = router;
