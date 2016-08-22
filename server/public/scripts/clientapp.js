var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', function($scope) {
  console.log("hey, i'm working!");
  $scope.people = [
    {
      firstname: 'Kris',
      lastname: 'Szafranski'
    },
    {
      firstname: 'Casie',
      lastname: 'Siekman'
    }
  ];

  $scope.addPerson = function() {
    $scope.people.push({
      firstname: 'Danny',
      lastname: 'Ritter'
    });
  }

  $scope.increment = function(number) {
    $scope.total += number;
  }

}]);
