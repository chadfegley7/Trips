var mongoose = require("mongoose");
var Trip = mongoose.model("Trip");
module.exports = (function(){
  return{
    show: function(req, res){
      Trip.find({}, function(err, results){
        if(err){
          console.log(err);
        }
        else{
          res.json(results);
        }
      })
    },

    post: function(req, res){
      Trip.create(req.body, function(err, results){
        if(err){
          console.log(err);
        }
        else{
          res.json(results);
        }
      })
    }
  };
})();
