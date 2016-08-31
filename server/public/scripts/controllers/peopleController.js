myApp.controller('PeopleController', ['$scope', 'DataFactory', function($scope, DataFactory) {
    console.log('People Controller');

    $scope.people = [];
    $scope.dataFactory = DataFactory;
    $scope.message = 'People!';
    $scope.formName = '';

    if($scope.dataFactory.peopleData() === undefined) {
      // initial load
      $scope.dataFactory.retrieveData().then(function() {
          $scope.people = $scope.dataFactory.peopleData();
      });
    } else {
      $scope.people = $scope.dataFactory.peopleData();
    }

    // Adds a person to the DB and then refresh our data from the factory
    $scope.addPerson = function() {
      $scope.dataFactory.addName($scope.formName).then(function(response) {
        console.log('get the data again');
        $scope.people = $scope.dataFactory.peopleData();
        // response returned from the addName data function
        // if(response == 201) {
        //   // ask the factory to refresh its data
        //   $scope.dataFactory.retrieveData().then(function() {
        //     console.log('refreshed data complete');
        //     $scope.people = $scope.dataFactory.peopleData();
        //   });
        // } else {
        //   console.log("error posting new name");
        // }
      });
      console.log('waiting to post....');

      $scope.formName = '';
    }

}]);
