blackBeltApp.controller("loginsController", function($scope, loginFactory, $location, $routeParams){
  $scope.create = function(){
    loginFactory.create($scope.newLogin, function(data){
      $scope.logins = data;
      console.log($scope.logins);
      $location.path("/partial2/" + $scope.logins._id)
    })
    $scope.newLogin = {};
  }
})
