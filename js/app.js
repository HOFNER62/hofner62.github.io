var app = angular.module('ngApp', ['ngRoute']);

app.config(function ($routeProvider) {
     
    $routeProvider.when('/', {
        templateUrl: '/home.html',
        controller: 'homeController'
    }).when('/about-us', {
        templateUrl: '/about-us.html',
        controller: 'aboutUsController'  
    }).when('/gigs', {
        templateUrl: '/gigs.html',
        controller: 'gigsController'  
    }).when('/media', {
        templateUrl: '/media.html',
        controller: 'mediaController'  
    }).when('/booking', {
        templateUrl: '/booking.html',
        controller: 'bookingController'  
    }).when('/services', {
        templateUrl: '/services.html',
        controller: 'servicesController'  
    }).otherwise({
        redirectTo: "/"
    });

});

app.controller("homeController", function ($scope, $location) {
    console.log('a');

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});

app.controller("aboutUsController", function ($scope) {
    console.log('b');
});

app.controller("gigsController", function ($scope) {
    console.log('c');
});

app.controller("mediaController", function ($scope) {
    console.log('d');
});

app.controller("bookingController", function ($scope) {
    console.log('e');
});

app.controller("servicesController", function ($scope) {
    console.log('f');
});