const Teacher = require("../model/teacherModel");
exports.addTeacher = async (teacherProfile) => {
  try {
    var teacher = await Teacher.create(teacherProfile);
    return teacher;
  } catch (error) {
    return new Error(error.message);
  }
};
exports.fetchTeacher = async (teacherId) => {
  try {
    var teacher = await Teacher.findOne({ userId: teacherId });
    return teacher;
  } catch (error) {
    return new Error(error.message);
  }
};

// exports.addTeacherDetails = (req, res) => {
//   try {
//     console.log(req.body);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
