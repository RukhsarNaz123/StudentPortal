const express = require("express");
const { getUserDetails } = require("../controllers/authController");
const { fetchAllTeachers } = require("../controllers/teacherController");
const router = express.Router();

router.get("/", fetchAllTeachers);
router.get("/:teacherId", getUserDetails);
module.exports = router;
