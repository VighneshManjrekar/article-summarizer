global.__rootDir = __dirname;
const path = require("path");
const cors = require('cors')

require("dotenv").config({ path: path.join(__dirname, "configs", ".env") });

const express = require("express");

const app = express();
const PORT = process.env.PORT || 7000;

const mainRouter = require("./routes/main.route");
const connectDb = require("./configs/db");
app.use(cors());
app.use(express.json());
app.use(mainRouter);
app.use((err, req, res, next) => {
  if(process.env.MODE=="dev"){
    console.log(err);
  }
  res.json({ success: false, error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} in ${process.env.MODE} mode`);
  connectDb();
});
