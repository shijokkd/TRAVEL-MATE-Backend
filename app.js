const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const commonRouter = require("./Routes/commonRouter");
const travelsRouter = require("./Routes/travelsRouts")
app.use("/api/", commonRouter);
console.log("erroe in commen")
// app.use("/api/", travelsRouter);
console.log("erroe in commenkkkkkkkkkkk")




// mongodb connectede the run the server
mongoose
  .connect("mongodb://localhost:27017/TravelMate")
  .then(() => {
    console.log("mongodb conectede");
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.log(`server running on ${port}`);
    });
  })
  .catch(() => console.log("error"));
