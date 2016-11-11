var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/components/users/views/users.view.html",
        controller : 'usersListCtrl'
    })
    .when("/details/:id", {
        templateUrl : "app/components/details/views/details.view.html",
        controller: 'detailsCtrl'
    });
});
