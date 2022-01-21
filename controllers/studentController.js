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
