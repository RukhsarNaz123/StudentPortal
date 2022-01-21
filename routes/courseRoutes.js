const express = require("express");
const {
  addCourse,
  viewAllCourse,
  updateCourse,
} = require("../controllers/courseController");
const router = express.Router();

router.post("/", addCourse);
router.get("/", viewAllCourse);
router.patch("/:courseId", updateCourse);
module.exports = router;
