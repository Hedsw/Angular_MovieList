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

    $scope.newMovieTitle = '';
    $scope.newMovieDescription = '';
    $scope.newMovieImage = 'http://post.phinf.naver.net/MjAxNzAxMDVfNDEg/MDAxNDgzNTgyMTkxODcy.Lnh8qTRc2Vm2tEKJC8hgtnzAS5uR2i2M-y86m32hnr4g.Ql7V0uYF8yrIakf_L-PjqluApwX7QnyuQdgLCKe5kIYg.JPEG/%EB%9D%BC%EC%98%A4%EC%96%B4.jpg?type=w1200';

    $scope.validateTitle = function() {
      if($scope.newMoiveTitle.length > 0) {
        console.debug($scope.newMoiveTitle);
      }
      else {
        window.alert("틀렸엉!! 바꿔");
      }
    };

    $scope.addMovie = function() {
      var movie = {
        title: $scope.newMoiveTitle,
        category: $scope.newMovieCategory,
        image: $scope.newMovieImage,
        description: $scope.newMovieDescription
      };
      $scope.movies.push(movie);
    };

    $scope.checkCategorySelected = function() {
      if($scope.newMovieCategory === '') {
        window.alert('카테고리를 비우면 안되용!');
      }
    };

    $scope.checkDescription = function() {
        console.debug($scope.newMovieDescription);
    };
  //  $scope.movieImage = movie.image;
  })
