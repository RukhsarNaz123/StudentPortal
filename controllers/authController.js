const User = require("../model/userModel");
const { addStudent, fetchStudent } = require("./studentController");
const { fetchTeacher, addTeacher } = require("./teacherController");

exports.signup = async (req, res) => {
  try {
    var user = await User.create(req.body); // bson
    //profile creation
    var profile = {
      username: user.username,
      email: user.email,
      userId: user._id,
    };

    var userProfile = null;
    if (user.role === "student") userProfile = await addStudent(profile);
    if (user.role === "teacher") userProfile = await addTeacher(profile);
    res.status(200).json({ status: "success", data: { profile } });
  } catch (error) {
    res.status(404).json({
      status: "error",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    var { email, password } = req.body;
    //check if user & email exists
    if (!email || !password) {
      res.status(404).json({
        status: "error",
        error: "please enter email and password",
      });
    }
    // fetch user whose email is given
    var user = await User.findOne({ email }).select("+password"); //zabardasti password lekr aane k lye

    if (!user) {
      res.status(401).json({
        status: "error",
        error: "Invalid email or password",
      });
    }

    //fetching profile
    var userProfile = null;
    if (user.role === "student") userProfile = await fetchStudent(user._id);
    if (user.role === "teacher") userProfile = await fetchTeacher(user._id);
    res.status(200).json({ status: "success", data: { userProfile } });
  } catch (error) {
    res.status(404).json({
      status: "error",
      error: error.message,
    });
  }
};
