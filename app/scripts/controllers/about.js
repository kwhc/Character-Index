'use strict';

/**
 * @ngdoc function
 * @name characterIndexApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the characterIndexApp
 */
angular.module('characterIndexApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
