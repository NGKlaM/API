const express = require("express");
const serverless = require("serverless-http");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/index");

app.use(express.json());
mongoose
  .connect(
    `mongodb+srv://lamnkph28782:ngklam2002@cluster0.npu6hkh.mongodb.net/`
  )
  .then(() => console.log("Database Connected!"));

app.use(cors());

app.use("/.netlify/functions/api", router);
app.listen(3000, () => {
  console.log(`Server on 3000 ${3000}`);
});
module.exports.handler = serverless(app);
