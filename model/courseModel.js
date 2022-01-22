const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  courseTeachers: {
    type: String,
    required: true,
  },
  creditHours: {
    type: String,
    enum: ["2", "3", "3+1", "2+1"],
  },
});

var Course = new mongoose.model("Course", courseSchema);

module.exports = Course;
