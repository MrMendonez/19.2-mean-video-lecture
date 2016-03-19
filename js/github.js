angular.module('todoApp')
  .controller('GithubController', function($scope, $http) {
    $scope.$watch('username', function() {
      $http.get('http://api.github.com/users/' + $scope.username + '/repos')
      .then(function(response) {
        $scope.repos = response.data
      });
    });

    $scope.$watch('selectedRepo', function() {
      $http.get('http://api.github.com/repos/' + $scope.selectedRepo + '/commits')
      .then(function(response) {
        $scope.commits = response.data;
      });
    });
  });