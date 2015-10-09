var routerApp = angular.module('routerApp');

routerApp.service('AddPet', function($http) {
  this.createAndAddPet = function(kind, variety, gender, age, name, description) {
    var thisNewAnimal = {
      kind: kind,
      variety: variety,
      gender: gender,
      age: age,
      name: name,
      description: description
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
// console.log(AddPet);

  $scope.submitToPost = function() {
    AddPet.createAndAddPet($scope.kind, $scope.variety, $scope.gender, $scope.age, $scope.description);

    // // console.log("testing to read form input: ", $scope.kindOfAnimal);
    // console.log("submitToPost function triggered...")
    // $http.post("http://localhost:3000/animals", animal)
    //   .then(function(req, status){
    //     console.log("Post request made! Req body: ", req.data);
    //   })

  }
});
//
