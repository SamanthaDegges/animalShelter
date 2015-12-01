var routerApp = angular.module('routerApp');

routerApp.controller('showListingsCtrl', function($scope, $http, $stateParams) {
  $scope.listings;
  console.log("The controller is working!!!");

  $http.get('/animals')
  .then(function(res) {
    $scope.listings = res.data;
    console.log(res.data);
  })
  .catch(function(err) {
    console.log("error!", err);
    $scope.listings = "Our database cannot retrieve data at this time. Please try again later."
  });


  $scope.adoptPet = function(animalId){
    console.log('button clicked. id is ', animalId);
    $http.delete("/animals/" + animalId)
    .then(function(res) {
      console.log(res,'done');
    })
    .catch(function(err) {
      console.log(err,'err');
      alert("There's been an error. Please refresh and try again. Error: "+ err.data)
    });
  }

});
