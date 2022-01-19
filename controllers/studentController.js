const Student = require("../model/studentModel");

// exports.getStudentDetails = (req, res) => {
//   try {
//     const { studentId } = req.params;
//     console.log(studentId);
//     res.status(200).json({ status: "success" });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };
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
