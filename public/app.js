//require('./angular');
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider

  // HOME STATE AND NESTED VIEWS ========================================
  .state('home', {
      url: '/home',
      templateUrl: 'views/partials/home.html'
  })

  //put scopes and controllers here of any nested views for home.

  // NAMED VIEWS =================================
  .state('putUpforAdoption', {
      url: '/putUpForAdoption',
      templateUrl: 'views/partials/putUpForAdoption.html',
      controller: "putUpForAdoptionCtrl"
  })

  .state('clients', {
      url: '/clientSignup',
      templateUrl: 'views/partials/clientSignUp.html'
  })

  .state('showListings', {
    url: '/listings',
    templateUrl: 'views/partials/showListings.html',
    controller: "showListingsCtrl"
  });
});
