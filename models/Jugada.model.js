const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const jugadaSchema = new Schema({
  title: String,
  video: String,
  description: String,
  type: String,
  // owner will be added later on
});

module.exports = model("Jugada", jugadaSchema);
