var mongoose = require("mongoose");
var LoginSchema = new mongoose.Schema({
  name: String
});

mongoose.model("Login", LoginSchema);
