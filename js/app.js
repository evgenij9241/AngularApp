var scotchApp = angular.module('scotchApp', ['ngRoute', 'ngAnimate', 'ngCookies']);

scotchApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home-video-1.html',
            controller: 'homeController'
        })

});

scotchApp.factory('globalVariables', ['$timeout', function ($timeout) {
    return {

    }
}]);

scotchApp.controller('homeController', ['$scope', '$anchorScroll', '$cookies', 'globalVariables', '$window', '$timeout', '$location', function ($scope, $anchorScroll, $cookies, globalVariables, $window, $timeout, $location) {

}]);

