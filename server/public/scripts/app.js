var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .when('/another', {
            templateUrl: '/views/templates/another.html',
            controller: 'AnotherController',
            controllerAs: 'another'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
