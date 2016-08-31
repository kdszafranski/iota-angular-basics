myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var people = undefined;

    var getData = function() {
        console.log('DF getting data from server');
        var promise = $http.get('/data').then(function(response) {
            people = response.data;
            console.log('DF Async data response:', people);
        });

        return promise;
    };

    var addPerson = function(name) {
      var promise = $http.post('/data', {name: name}).then(function(response) {
        console.log('DF post completed');
        // done, now refersh out data from the DB
        return getData();
      });

      return promise;
    };


    //PUBLIC
    var publicApi = {
      peopleData: function() {
          return people;
      },
      retrieveData: function() {
          return getData();
      },
      addName: function(name) {
          return addPerson(name);
      }
    };

    return publicApi;

}]);
