const Student = require("../model/studentModel");
const mongoose = require("mongoose");
exports.getStudentDetails = (req, res) => {
  try {
    console.log("student detail api");
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

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

exports.updateInfo = async (req, res) => {
  try {
    var { studentId } = req.params;
    var id = mongoose.Types.ObjectId(studentId);
    const updatedInfo = await Student.findOneAndUpdate(
      { userId: id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: {
        user: updatedInfo,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
