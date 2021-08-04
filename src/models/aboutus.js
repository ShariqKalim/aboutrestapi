const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    trim: true,
  },
  userrole: {
    type: String,
    require: true,
    trim: true,
  },
  userimage: {
    type: String,
    require: true,
    trim: true,
  },
});

const aboutus = new mongoose.model("Aboutus", aboutSchema);

module.exports = aboutus;
