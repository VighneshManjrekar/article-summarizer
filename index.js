global.__rootDir = __dirname;
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "configs", ".env") });

const express = require("express");

const app = express();
const PORT = process.env.PORT || 7000;

const mainRouter = require("./routes/main.route");
const connectDb = require("./configs/db");

app.use(express.json());
app.use(mainRouter);
app.use((err, req, res, next) => {
  let status = (err.message == "Invalid URL" || err.message == "Not english article") ? 400 : 500
  if(process.env.MODE=="dev"){
    console.log(err)
  }
  res.status(status).json({ success: false, error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} in ${process.env.MODE} mode`);
  connectDb();
});
