angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(res) {
      for (var i = 0; i < res.data.data.length; i++) {
        res.data.data[i].first_name = "Ralf";
      }
      deferred.resolve(res);
    });
    return deferred.promise;
  }

});
