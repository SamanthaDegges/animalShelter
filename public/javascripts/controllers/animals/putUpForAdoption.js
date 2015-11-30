var routerApp = angular.module('routerApp');

routerApp.service('addPet', function($http) {
  this.createAndAddPet = function(animal) {
    var newAnimal = {
      kind: animal.kind,
      variety: animal.variety,
      gender: animal.gender,
      age: animal.age,
      name: animal.name,
      description: animal.description
  }
    $http.post("/animals", newAnimal).
    then(function(err){
      console.log(err);
      alert("There's been an error saving this addition to the database. Please try again.")
    }, function(success){
      console.log(success);
    })
  }
});

routerApp.controller('putUpForAdoptionCtrl', function($scope, $http, addPet){
  $scope.submitToPost = function() {
    addPet.createAndAddPet($scope.animal);
  }
});
