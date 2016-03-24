'use strict';

angular.module('hogeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.favorites = [
      'sushi',
      'yakiniku',
      'melon'
    ];
  });