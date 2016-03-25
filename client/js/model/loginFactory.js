blackBeltApp.factory("loginFactory", function($http){
  var logins = [];
  var factory = {};

  factory.index = function(id, callback){
    $http.get("/logins/"+id).success(function(output){
      callback(output);
    })
  }

  factory.create = function(info, callback){
    $http.post("/logins", info).success(function(output){
      callback(output);
    })
  }
  return factory;
})
