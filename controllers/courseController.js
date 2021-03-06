const Course = require("../model/courseModel");
const Student = require("../model/studentModel");
const Teacher = require("../model/teacherModel");
exports.addCourse = async (req, res) => {
  try {
    //extract teacherId from req.body
    console.log(req.body);
    var { teacherId, ...restData } = req.body;
    // console.log(restData);
    const modifiedData = { courseTeachers: teacherId, ...restData };
    await Teacher.findOneAndUpdate(
      { userId: teacherId },
      { $push: { teachingCourses: restData } }
    );
    var enrolledCourse = await Course.create(modifiedData);
    res.status(200).json({
      status: "success",
      data: {
        courses: enrolledCourse,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.viewAllCourse = async (req, res) => {
  try {
    var courses = await Course.find();
    res.status(200).json({ status: "success", data: { courses } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    console.log(req.body);
    var updatedCourse = await Course.findOneAndUpdate(
      {
        _id: req.params.courseId,
      },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        course: updatedCourse,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
