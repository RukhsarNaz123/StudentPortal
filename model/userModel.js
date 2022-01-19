const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "this is my custom error message"],
    unique: [true, "username already exists"],
  },
  role: {
    type: String,
    required: [true, "role is required!"],
    enum: ["student", "teacher"],
  },
  displayPicture: {
    type: String,
    default: "default.png",
  },
  email: {
    type: String,
    unique: [true, "account on this email already exists"], // indexing
    required: true, //TODO: Check Email Pattern // validation
    lower: true, // data modification eg. User@gmail.com & user@gmail.com
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    select: false, // ab yeh kisi bhi API request pe data k sath ni fetch hoga
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: [
      function (val) {
        //here, "this" pointout document
        return val === this.password;
      },
      "password doesnot match",
    ],
  },
  passwordChangedAt: Date,
});

//post validation
userSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    if (error.keyValue.email)
      next(new Error(`Account already exists on this email.`));
    if (error.keyValue.username)
      next(new Error(`${this.username} already exists`));
  } else {
    next();
  }
});
var User = new mongoose.model("User", userSchema);

module.exports = User;
