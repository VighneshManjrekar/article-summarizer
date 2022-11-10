const mongoose = require("mongoose");

const SummarySchema = new mongoose.Schema({
  top_image: String,
  title: String,
  summary: String,
  url: String,
});

module.exports = mongoose.model("Summary", SummarySchema);
