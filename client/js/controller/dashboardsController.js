blackBeltApp.controller("dashboardsController", function($scope, $routeParams, $location, loginFactory, tripFactory){
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
        console.log($scope.trips);
      })
    })
    console.log($scope.newTrip);
    $scope.newTrip = {};
  }
})
