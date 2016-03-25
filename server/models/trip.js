var mongoose = require("mongoose");
var TripSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  UserId: String,
  created_at: {type: Date, default: Date.now}
});

mongoose.model("Trip", TripSchema);
