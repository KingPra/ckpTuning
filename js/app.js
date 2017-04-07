const app = angular.module('ShopApp', ['ui.router']);


app.config(function ($stateProvider) {
    // $stateProvider is the object we add routes ('states') to.
    $stateProvider.state({
        name: 'home',
        url: '/home',
        component: 'home',
    });

    $stateProvider.state({
        name: 'dyno',
        url: '/dyno',
        component: 'dyno',
    });
    // ...we can set up any number of states
});

// Each one of these represents a 'view' on the page.
app.controller('HomeController', function () {
});

// $routeParams - parameters provided by the router
// ^ provided by ui-router, have to use this name
// $stateParams is used whenever we need to get information from the route 
app.controller('DynoController', function () {
});

app.component('home', {
    controller: 'HomeController',
    templateUrl: 'templates/home.html',
});

app.component('dyno', {
    controller: 'DynoController',
    templateUrl: 'templates/dyno.html',
});
