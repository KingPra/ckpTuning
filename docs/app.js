(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    // Why person_id? 
    // Note: need to parseInt - these will be strings by default
});

/* Defining a component */
app.component('home', {
    controller: 'HomeController',
    templateUrl: 'templates/home.html',
});

app.component('dyno', {
    controller: 'DynoController',
    templateUrl: 'templates/dyno.html',
});

// app.component('friendSummary', {
//     templateUrl: 'templates/summary.html',
//     bindings: {
//         person: '<',
//         whenIClick: '&', // functions are &
//     },
// });

app.factory('NuggetService', function () {
    return {
    };
});

},{}]},{},[1]);
