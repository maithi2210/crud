const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("Employee", empSchema);
