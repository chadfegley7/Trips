var mongoose = require("mongoose");
var Login = mongoose.model("Login");
module.exports = (function(){
  return{
    show: function(req, res){
      Login.findOne({_id: req.params.id}, function(err, results){
        if(err){
          console.log(err);
        }
        else{
          res.json(results);
        }
      })
    },

    post: function(req, res){
      Login.create(req.body, function(err, results){
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
