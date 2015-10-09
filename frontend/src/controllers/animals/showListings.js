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
    $scope.listing = "Our database cannot retrieve data at this time. Please try again later."
  })

});
// CHANGE THESE ROUTES TO CLIENT SIDE FRONT END REQUESTS.?



$("#consider").on("click", function(){
  var $content = $(this).find('li').val();
  $("list").text($content);
})
