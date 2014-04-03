'use strict';

angular.module('c4MobAppApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'

    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider

            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/catch-up', {
                templateUrl: 'views/catch-up.html',
                controller: 'CatchUpCtrl'
            })
            .when('/categories', {
                templateUrl: 'views/categories.html',
                controller: 'CategoriesCtrl'
            })
            .when('/a-z', {
                templateUrl: 'views/a-z.html',
                controller: 'AZCtrl'
            })
            .when('/parental-control-enable',{
                templateUrl: 'views/parental-control-enable.html',
                controller: 'ParentalControlCtrl'
            })
            .when('/parental-control-disable',{
                templateUrl: 'views/parental-control-disable.html',
                controller: 'ParentalControlCtrl'
            })
            .when('/parental-control-success',{
                templateUrl: 'views/parental-control-success.html',
                controller: 'ParentalControlCtrl'
            })
            .otherwise({
                templateUrl: 'views/404.html'
            });
    }]);
