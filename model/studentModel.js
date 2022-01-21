const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
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
    default: "artist",
  },
  rollNo: {
    type: String,
    unique: true,
  },
  section: {
    type: String,
    enum: ["A", "B", "C", "D", "E", "F"],
  },
  semester: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  courses: Array,
});

var Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
