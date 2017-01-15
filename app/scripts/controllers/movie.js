angular.module('movieManiaApp')
.controller('MovieCtrl', function($scope, $routeParams) {
  console.debug($routeParams.id);
  console.debug($routeParams.slug);

  var id = parseInt($routeParams.id, 10);

  var movieList = [{
    id:23,


  }];
  for(var index in movieList) {
    var movie = movieList[index];
    if(movie.id === id) {
      $scope.movie = movie;
      break;
    }
  }
})
