'use strict';

/**
 * @ngdoc function
 * @name characterIndexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the characterIndexApp
 */
angular.module('characterIndexApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
