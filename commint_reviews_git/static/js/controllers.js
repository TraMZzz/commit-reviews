commentApp.controller('FormCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.submit = function(isValid, form_data) {
        $scope.userprojects = ''
        $http.get("https://api.github.com/users/"+ form_data.user +"/repos").
        success(function(data, status, headers, config) {
            $scope.userprojects = data
            console.log(data)
      })
    };
    $scope.user = ''
    $scope.usershow = function(user_data) {
        $http.get(user_data).
        success(function(data, status, headers, config) {
            $scope.user = data
      })
    };
    $scope.userproject = ''
    $scope.commints = ''
    $scope.projectshow = function(user_userproject) {
        $http.get(user_userproject).
        success(function(data, status, headers, config) {
            $scope.userproject = data
            console.log(data)
            $http.get(user_userproject+'/commits').
            success(function(data, status, headers, config) {
                console.log(data)
                $scope.commints = data
            })
      })
    };
    $scope.comments = ''
    $scope.commentsshow = function(user_comments) {
        $http.get(user_comments).
        success(function(data, status, headers, config) {
            $scope.comments = data
            console.log(data)
      })
    };
}]);
