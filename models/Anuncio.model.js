const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const anuncioSchema = new Schema({
  image: String,
  title: String,
  description: String,
  // owner will be added later on
});

module.exports = model("Anuncio", anuncioSchema);
