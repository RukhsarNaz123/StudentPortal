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
exports.fetchAllTeachers = async (req, res) => {
  try {
    var teachers = await Teacher.find();
    res.status(200).json({
      status: "success",
      data: {
        teachers,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
