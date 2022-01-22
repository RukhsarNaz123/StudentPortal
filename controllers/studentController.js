const Course = require("../model/courseModel");
const Student = require("../model/studentModel");

exports.addStudent = async (studentProfile) => {
  try {
    var student = await Student.create(studentProfile);
    return student;
  } catch (error) {
    return new Error(error.message);
  }
};

exports.fetchStudent = async (studentId) => {
  try {
    var student = await Student.findOne({ userId: studentId });
    return student;
  } catch (error) {
    return new Error(error.message);
  }
};
exports.fetchEnrolledStudents = async (req, res) => {
  try {
    const students = await Student.find({ semester: req.body.semester });
    res.status(200).json({
      status: "success",
      data: {
        students,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.fetchAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      status: "success",
      data: { students },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    console.log(req.body);
    const { rollNo, studentId, section, semester } = req.body;

    const courses = await Course.find({ semester: semester });
    const updatedStudent = await Student.findOneAndUpdate(
      { userId: studentId },
      { rollNo, semester, courses, section },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: { student: updatedStudent },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
