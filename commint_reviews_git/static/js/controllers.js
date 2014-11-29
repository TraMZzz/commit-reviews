commentApp.controller('FormCtrl', ['$scope', '$http', function($scope, $http) {
    this.submit = function(isValid, form_data) {
        $scope.userprojects = ''
        console.log(form_data)
        $http.get("https://api.github.com/users/"+ form_data.user +"/repos").
        success(function(data, status, headers, config) {
            console.log(data)
            $scope.userprojects = data
      })
    };
}]);
