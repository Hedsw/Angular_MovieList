'use strict';

/**
 * @ngdoc overview
 * @name movieManiaApp
 * @description
 * # movieManiaApp
 *
 * Main module of the application.
 */
angular
  .module('movieManiaApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
