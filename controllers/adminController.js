const Admin = require("../model/adminModel");
exports.addAdmin = async (profile) => {
  return await Admin.create(profile);
};

exports.fetchAdmin = async (adminId) => {
  return await Admin.findOne({ userId: adminId });
};

exports.updateStudentInfo = async (req, res) => {
  try {
    var { studentId } = req.params;
    var { semester, ...restData } = req.body;

    var courses = await Course.find({ semester });
    console.log(courses);
    var modifiedData = {
      courses,
      restData,
    };
    // var id = mongoose.Types.ObjectId(studentId);
    const updatedInfo = await Student.findOneAndUpdate(
      { userId: studentId },
      modifiedData,
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
// exports.updateTeacherInfo = async (req, res) => {
//   try {
//     var { teacherId } = req.params;
//     var { courseId } = req.body;
//     var courses = await Course.find({ courseId });
//     console.log(courses);
//     var modifiedData = {
//       courses,
//       restData,
//     };
//     // var id = mongoose.Types.ObjectId(studentId);
//     const updatedInfo = await Student.findOneAndUpdate(
//       { userId: studentId },
//       modifiedData,
//       { new: true }
//     );
//     res.status(200).json({
//       status: "success",
//       data: {
//         user: updatedInfo,
//       },
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
