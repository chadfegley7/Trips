blackBeltApp.controller("tripsController", function($scope, $routeParams, loginFactory, tripFactory){
  $scope.logins = $routeParams;
  loginFactory.index($scope.logins.id, function(data){
    $scope.user = data;
  })
  tripFactory.index(function(data){
    $scope.trips = data;
  })
  $scope.addTrip = function(data){
    tripFactory.addTrip($scope.newTrip, function(){
      tripFactory.index(function(data){
        $scope.trips = data;
      })
    })
    console.log($scope.newTrip);
    $scope.newTrip = {};
  }
  $scope.markDone = function(trip){
    trip.isDone = true;
  };
  $scope.notDone = function(trip){
    trip.isDone = false;
  }
})
