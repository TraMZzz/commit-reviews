(function() {
    "use strict"
    angular
        .module('commentApp')
        .controller('FormController', ['$scope', '$http', 'Contact', 'ContactDetail', 'ProjectsCommints', 'Projects', 'ProjectsComments',
                                       function($scope, $http, Contact, ContactDetail, ProjectsCommints, Projects, ProjectsComments) {
            $scope.submit = function(isValid, form_data) {
                if (isValid) {
                    Contact.submit(form_data.user).then(function(d) {
                        $scope.userprojects = d;
                    });
                }
            };

            $scope.usershow = function(user_data) {
                ContactDetail.submit(user_data).then(function(d) {
                    $scope.user = d;
                });
            };

            $scope.projectshow = function(user_project) {
                Projects.submit(user_project).then(function(d) {
                    $scope.userproject = d;
                });
            };

            $scope.commintsshow = function(user_project) {
                ProjectsCommints.submit(user_project).then(function(d) {
                    $scope.commints = d;
                });
            };

            $scope.commentsshow = function(user_comments) {
                ProjectsComments.submit(user_comments).then(function(d) {
                    $scope.comments = d;
                });
            };
        }]);
})();
