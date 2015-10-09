var routerApp = angular.module('routerApp');

routerApp.service('AddPet', function($http) {
  this.createAndAddPet = function(animal) {
    var thisNewAnimal = {
      kind: animal.kind,
      variety: animal.variety,
      gender: animal.gender,
      age: animal.age,
      name: animal.name,
      description: animal.description
  }
    $http.post("http://localhost:3000/animals", thisNewAnimal).
    then(function(err){
      console.log(err);
    }, function(success){
      console.log(success);
    })
  }
});

routerApp.controller('putUpForAdoptionCtrl', function($scope, $http, AddPet){

  $scope.submitToPost = function() {
    AddPet.createAndAddPet($scope.animal);
  }
});
