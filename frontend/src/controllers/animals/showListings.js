var routerApp = angular.module('routerApp');

routerApp.controller('showListingsCtrl', function($scope, $http) {
  console.log("The controller is working!!!");
  $http.get('http://localhost:3000/animals')
  .then(function(res) {
    console.log("Get Request works. Heres data: ",res.data);
    $scope.listings = res.data;
  })
  .catch(function(err) {
    console.log("error!", err);
    $scope.listings = "Our database cannot retrieve data at this time. Please try again later."
  });
  $scope.total = "test";
  $scope.consider = function(){
    $scope.considered = "test";
    console.log("this function runs.");
  }


});


// $scope.consider.on("click", function(){
//   $scope.consider = $scope.listing
//   $("list").text($content);
// })
