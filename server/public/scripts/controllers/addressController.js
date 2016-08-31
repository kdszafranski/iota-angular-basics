myApp.controller('AddressController', ['$scope', 'DataFactory', function($scope, DataFactory) {
    console.log('Address Controller');

    $scope.dataFactory = DataFactory;
    $scope.message = 'Addresses!';
    $scope.people = [];

    if($scope.dataFactory.peopleData() === undefined) {
        // initial load
        console.log("getting data from factory...");
        $scope.dataFactory.retrieveData().then(function() {
            $scope.people = $scope.dataFactory.peopleData();
        });
    } else {
        console.log('factory has data!');
        $scope.people = $scope.dataFactory.peopleData();
    }

}]);
