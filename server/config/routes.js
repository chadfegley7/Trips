var logins = require("./../controllers/logins.js");
var trips = require("./../controllers/trips.js");

module.exports = function(app){
  app.get("/logins/:id", function(req, res){
    console.log("In GET route");
    logins.show(req, res);
  })

  app.post("/logins", function(req, res){
    logins.post(req, res);
  });

  app.get("/trips", function(req, res){
    console.log("In GET route");
    trips.show(req, res);
  })

  app.post("/trips", function(req, res){
    trips.post(req, res);
  });


}
