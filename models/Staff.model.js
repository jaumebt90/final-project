const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const staffSchema = new Schema({
  image: String,
  name: String,
  alias: String,
  position: String,
  hobbie: [String],
  // owner will be added later on
});

module.exports = model("Staff", staffSchema);
