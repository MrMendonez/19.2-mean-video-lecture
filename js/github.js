angular.module('todoApp')
  .controller('GithubController', function($scope, $http) {
    $scope.$watch('username', function() {
      $http.get('http://api.github.com/users/' + $scope.username + '/repos')
      .then(function(response) {
        $scope.repos = response.data
      });
    });
  });