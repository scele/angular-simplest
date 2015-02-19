'use strict';

angular.module('myApp.services', [
])
.factory('version', function ($http) {
  var versionObj = { name : 'loading...'};
  $http.get('/version').success(function (data) {
    versionObj.name = data;
  }).error(alert);

  return versionObj;
});
