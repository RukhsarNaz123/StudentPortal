const express = require("express");
const { fetchAllTeachers } = require("../controllers/teacherController");
const router = express.Router();

router.get("/", fetchAllTeachers);
module.exports = router;
