const app = angular.module('ShopApp', ['ui.router', 'ngMaterial', 'ngAnimate']);


app.config(function ($stateProvider) {
    // $stateProvider is the object we add routes ('states') to.
    $stateProvider.state({
        name: 'home',
        url: '',
        component: 'home',
    });

    $stateProvider.state({
        name: 'dyno',
        url: '/dyno',
        component: 'dyno',
    });
});

app.controller('HomeCtrl', ($scope) => {
    $scope.currentNavItem ='home';
});

app.component('home', {
    controller: 'HomeCtrl',
    templateUrl: 'templates/home.html',
});

app.component('dyno', {
    templateUrl: 'templates/dyno.html',
});