'use strict';

angular.module('characterIndexApp')
  .controller('MainCtrl', function ($scope) {
    $scope.things = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('AboutCtrl', function($scope){
    $scope.thing = 'thing';
  })
  .controller('CharacterCtrl', function($scope){
    $scope.book = {
      id: 1,
      name: 'Harry Potter',
      author: 'J. K. Rowling',
      stores: [
        { id: 1, name: 'Barnes & Noble', quantity: 3},
        { id: 2, name: 'Waterstones', quantity: 2},
        { id: 3, name: 'Book Depository', quantity: 5}
      ]
    };

    $scope.deleteBook = function() {
      $http.delete('ourserver/books/' + bookId);
    };

    $scope.updateBook = function() {
      $http.put('ourserver/books/' + bookId, $scope.book);
    };

    $scope.getBookImageUrl = function(width, height) {
      return 'our/image/service/' + bookId + '/width/height';
    };

    $scope.isAvailable = function() {
      if (!$scope.book.stores || $scope.book.stores.length === 0) {
        return false;
      }
      return $scope.book.stores.some(function(store) {
        return store.quantity > 0;
      });
    };
  });

