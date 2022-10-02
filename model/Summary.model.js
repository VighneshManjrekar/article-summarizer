const mongoose = require("mongoose");

const SummarySchema = new mongoose.Schema({
  top_image: String,
  keyowrds: [],
  title: String,
  summary: String,
  url: String,
  summary: String,
});

module.exports = mongoose.model("Summary", SummarySchema);
