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
});

app.component('home', {
    templateUrl: 'templates/home.html',
});

app.component('dyno', {
    templateUrl: 'templates/dyno.html',
});
