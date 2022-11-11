global.__rootDir = __dirname;
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: path.join(__dirname, "configs", ".env") });

const express = require("express");

const app = express();
const PORT = process.env.PORT || 7000;

const mainRouter = require("./router/main.route");
const connectDb = require("./configs/db");

// middlewares
app.use(cors());
app.use(express.json());
// router
app.use(mainRouter);

// error handling
app.use((err, req, res, next) => {
  let status =
    err.message == "Invalid URL" || err.message == "Not english article"
      ? 400
      : 500;
  if (process.env.MODE == "dev") {
    console.log(err);
  }
  if (err.response.data.message) {
    err.message = err.response.data.message;
    status = err.response.status;
  }
  res.status(status).json({ success: false, error: err.message });
});

// spin up the server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT} in ${process.env.MODE} mode`);
  //DB connection
  connectDb();
});
