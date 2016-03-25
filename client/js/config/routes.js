var blackBeltApp = angular.module("blackBeltApp", ['ngRoute']);

blackBeltApp.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/", {
    templateUrl: "./../static/partials/login.html"
  })

  .when("/partial2/:id", {
    templateUrl: "./../static/partials/dashboard.html",
    controller: "dashboardsController"
  })

  .when("/partial3/:id", {
    templateUrl: "./../static/partials/users.html"
  })

  .otherwise({
    redirectTo: "/"
  });
})
