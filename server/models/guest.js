const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  names: "",
  uniqueCode: "",
  attendance: false,
  veggie: {},
});

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;
