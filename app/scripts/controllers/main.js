'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp')
  .controller('MainCtrl', function ($scope) {
    var movie = [{
      title : 'Ace',
      image: 'http://dthumb.phinf.naver.net/?src=%22http%3A%2F%2Fdbscthumb.phinf.naver.net%2F4599_000_1%2F20161226192103380_Y5MU6XTX0.jpg%2Ffb53_11_i1.jpg%3Ftype%3Dw690_fst%26wm%3DN%22&twidth=587&theight=324&opts=17',
      description:'This is a book that i want to explain to you ! :)'
    },
    {
      title : 'Ace',
      image: 'http://dthumb.phinf.naver.net/?src=%22http%3A%2F%2Fdbscthumb.phinf.naver.net%2F4599_000_1%2F20161226192103380_Y5MU6XTX0.jpg%2Ffb53_11_i1.jpg%3Ftype%3Dw690_fst%26wm%3DN%22&twidth=587&theight=324&opts=17',
      description:'This is a book that i want to explain to you ! :)'
    },
    {
      title : 'Ace',
      image: 'http://dthumb.phinf.naver.net/?src=%22http%3A%2F%2Fdbscthumb.phinf.naver.net%2F4599_000_1%2F20161226192103380_Y5MU6XTX0.jpg%2Ffb53_11_i1.jpg%3Ftype%3Dw690_fst%26wm%3DN%22&twidth=587&theight=324&opts=17',
      description:'This is a book that i want to explain to you ! :)'
    }];
    $scope.movies = movie;
  //  $scope.movieImage = movie.image;
  })
  .controller('FormCtrl', function($scope){
    console.log('HEHE');

  })
  .controller('SubCtrl', function($scope){
    $scope.moviesofSub = $scope.movies;
  });
