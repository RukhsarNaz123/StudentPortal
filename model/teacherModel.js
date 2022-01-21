const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
  },
  email: {
    type: String,
    unique: true, // indexing
    required: true, //TODO: Check Email Pattern // validation
    lower: true, // data modification eg. User@gmail.com & user@gmail.com
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "user id is required"],
  },
  role: {
    type: String,
    default: "teacher",
  },
  department: String,
  qualifications: {
    type: String,
    enum: ["PhD", "Masters"],
  },
  teachingCourses: Array,
});

var Teacher = new mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
