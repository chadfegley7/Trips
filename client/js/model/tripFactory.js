blackBeltApp.factory("tripFactory", function($http){
  var trips = [];
  var factory = {};

  factory.index = function(callback){
    $http.get("/trips").success(function(output){
      trips = output;
      callback(trips);
    })
  }

  factory.addTrip = function(info, callback){
    $http.post("/trips", info).success(function(output){
      trips.push(output);
      callback(trips);
    })
  }
  return factory;
})
