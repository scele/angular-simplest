angular.module('myApp.controller', [])
  .controller('MainCtrl', function($scope, version) {

    $scope.test = "Hello world!";
    $scope.items = [{member1: 'foo', member2: 'bar'}, {member1: 'huhuu', member2: 'eeee'}];
    $scope.version = version;
  });
