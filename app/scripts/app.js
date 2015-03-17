'use strict';

/**
 * @ngdoc overview
 * @name characterIndexApp
 * @description
 * # characterIndexApp
 *
 * Main module of the application.
 */
angular
  .module('characterIndexApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/character', {
        templateUrl: 'views/character.html',
        controller: 'CharacterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
