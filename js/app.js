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
    }).when('/merch', {
        templateUrl: '/merch.html',
        controller: 'merchController'  
    }).otherwise({
        redirectTo: "/"
    });

});

app.controller("homeController", function ($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});

app.controller("aboutUsController", function ($scope) {
});

app.controller("gigsController", function ($scope, $http, $q, $filter) {
    $scope.gigs = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/gigs.json';

        $http.get(file)
            .then(function(response) {
                $scope.gigs = response.data.gigs;
            });
    };

    $scope.init();
});

app.controller("mediaController", function ($scope) {
});

app.controller("bookingController", function ($scope) {
});

app.controller("servicesController", function ($scope) {
});

app.controller("merchController", function ($scope) {
});
