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
    //then(function(res){
      // console.log(res + 'added');
    //},
    function(err){
      alert("There's been an error saving this addition to the database. Please try again. Error: "+ err.data)
      console.log("Error: " + err);
    })
  }
});

routerApp.controller('putUpForAdoptionCtrl', function($scope, $http, addPet){
  $scope.submitToPost = function() {
    addPet.createAndAddPet($scope.animal);
    $scope.animal = ""; 
  }
});
