var routerApp = angular.module('routerApp');

routerApp.controller('showListingsCtrl', function($scope, $http) {
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


  $scope.adoptPet = function(index){
    var animalId = {
      id: $scope.listings[index]._id
    }
    console.log('button clicked. id is ', animalId);
    return $http.delete("/animals", animalId);
  }

});
