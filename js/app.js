var app = angular.module("ngApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/home.html",
      controller: "homeController",
    })
    .when("/about-us", {
      templateUrl: "/about-us.html",
      controller: "aboutUsController",
    })
    .when("/gigs", {
      templateUrl: "/gigs.html",
      controller: "gigsController",
    })
    .when("/media", {
      templateUrl: "/media.html",
      controller: "mediaController",
    })
    .when("/booking", {
      templateUrl: "/booking.html",
      controller: "bookingController",
    })
    .when("/services", {
      templateUrl: "/services.html",
      controller: "servicesController",
    })
    .when("/merch", {
      templateUrl: "/merch.html",
      controller: "merchController",
    })
    .otherwise({
      redirectTo: "/",
    });
});

app.controller("homeController", function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
});

app.controller("aboutUsController", function ($scope) {});

app.controller("gigsController", function ($scope, $http, $q, $filter) {
  $scope.gigs = [];

  $scope.init = function () {
    getData();
  };

  getData = () => {
    var file = "data/gigs.json";

    $http.get(file).then(function (response) {
      $scope.gigs = response.data.gigs;
    });
  };

  $scope.init();
});

app.controller("mediaController", function ($scope) {});

app.controller("bookingController", function ($scope) {});

app.controller("servicesController", function ($scope) {});

app.controller("merchController", function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = ($scope.slides = []);

  slides.push(
    {
      image: "images/merch/longsleeve_teeshirt_bw_front.jpg",
      text: "Long Sleeve TeeShirt [B&W] (Front)",
      id: 1,
    },
    {
      image: "images/merch/longsleeve_teeshirt_bw_back.jpg",
      text: "Long Sleeve TeeShirt [B&W] (Back)",
      id: 2,
    },
    {
      image: "images/merch/teeshirt_black_c_front.jpg",
      text: "TeeShirt Black [Colour] (Front)",
      id: 3,
    },
    {
      image: "images/merch/teeshirt_green_c_front.jpg",
      text: "TeeShirt Green [Colour] (Front)",
      id: 4,
    },
    {
      image: "images/merch/teeshirt_green_c_back.jpg",
      text: "TeeShirt Green [Colour] (Back)",
      id: 5,
    },
    {
      image: "images/merch/teeshirt_grey_c_front.jpg",
      text: "TeeShirt Grey [Colour] (Front)",
      id: 6,
    },
    {
      image: "images/merch/teeshirt_white_bw_front.jpg",
      text: "TeeShirt White [B&W] (Front)",
      id: 7,
    },
    {
      image: "images/merch/teeshirt_white_c_front.jpg",
      text: "TeeShirt White [Colour] (Front)",
      id: 8,
    }
  );
});
