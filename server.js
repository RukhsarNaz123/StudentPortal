require("dotenv").config({ path: "config.env" });
const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const adminRoutes = require("./routes/adminRoutes");
const courseRoutes = require("./routes/courseRoutes");
const app = express();
const cors = require("cors");
//middleware
app.use(express.json());
app.use(cors());
require("mongoose")
  .connect(process.env.MONGO_STRING)
  .then((connection) => {
    console.log("mongoDB connected");
  });

app.use("/api/v1/student", studentRoutes);
app.use("/api/v1/teacher", teacherRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/admin", adminRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server started at PORT ${process.env.PORT}`);
});
