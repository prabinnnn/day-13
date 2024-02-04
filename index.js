const morgan = require("morgan");
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const indexofrouter = require("./routes");
const PORT = Number(process.env.PORT);
app.use(morgan("dev"));
app.use("/", indexofrouter);
app.use(express.json());
mongoose.connect(process.env.DB).then(() => console.log("Connected!"));
app.use((err, req, res, next) => {
  err = err ? err.toString() : "something missing";
  res.status(500).json({ msg: err });
});

app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});
