//require('./angular');
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider

  // HOME STATE AND NESTED VIEWS ========================================
  .state('home', {
      url: '/home',
      templateUrl: 'src/partials/home.html'
  })

  //put scopes and controllers here of any nested views for home.

  // NAMED VIEWS =================================
  .state('putUpforAdoption', {
      url: '/putUpForAdoption',
      templateUrl: 'src/partials/putUpForAdoption.html',
      controller: "putUpForAdoptionCtrl"
  })

  .state('clients', {
      url: '/clientSignup',
      templateUrl: 'src/partials/clientSignUp.html'
  })

  .state('showListings', {
    url: '/listings',
    templateUrl: 'src/partials/showListings.html',
    controller: "showListingsCtrl"
  });
});
// module.exports = angular;


$("#consider").on("click", function(){
  var $content = $(this).find('li').val();
  $("list").text($content);
})
