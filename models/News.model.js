const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const newsSchema = new Schema({
  image: String,
  title: String,
  description: String,
  // owner will be added later on
});

module.exports = model("New", newsSchema);
