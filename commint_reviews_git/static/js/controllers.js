commentApp.controller('MyInfo', ['$scope',function($scope) {
        $scope.mytestinfo = {
            first_name: 'Rostuslav',
            last_name: 'Steh',
            email: 'steh44@gmailcom',
            jabber: 'tramzzz',
            birth: '04.11.1990',
            skype: 'tramzzz',
            bio: 'some big bio =) ',
            other: '???',
        };
}]);

commentApp.controller('FormCtrl', ['$scope', '$http', function($scope, $http) {
    this.submit = function(isValid, data) {
        console.log(data)
    };
}]);
