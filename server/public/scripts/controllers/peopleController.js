myApp.controller('PeopleController', ['$scope', 'DataFactory', function($scope, DataFactory) {
    console.log('People Controller');

    $scope.people = [];
    $scope.dataFactory = DataFactory;
    $scope.message = 'People!';
    $scope.formName = '';

    // tell the factory to get data from the DB so we can use it
    if($scope.dataFactory.peopleData() === undefined) {
      console.log('factory has no data, getting it now.');
      $scope.dataFactory.retrieveData().then(function() {
        $scope.people = $scope.dataFactory.peopleData();
      });
    } else {
      $scope.people = $scope.dataFactory.peopleData();
    }

    console.log('this happens now!');

    // Adds a person to the DB and then refresh our data from the factory
    $scope.addPerson = function() {
      console.log('adding a person....');
      $scope.dataFactory.addName($scope.formName).then(function(response) {        
        $scope.people = $scope.dataFactory.peopleData();
      });
    }

    console.log('when does this run?');

}]);
