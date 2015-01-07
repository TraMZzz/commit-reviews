(function() {
    "use strict"
    angular
        .module('commentApp')
        .controller('FormController', ['Contact', 'ContactDetail', 'ProjectsCommints', 'Projects', 'ProjectsComments',
                                       function(Contact, ContactDetail, ProjectsCommints, Projects, ProjectsComments) {
            var vm = this;
            vm.submit = function(isValid, form_data) {
                if (isValid) {
                    Contact.submit(form_data.user).then(function(d) {
                        vm.userprojects = d;
                    });
                }
            };

            vm.usershow = function(user_data) {
                ContactDetail.submit(user_data).then(function(d) {
                    vm.user = d;
                });
            };

            vm.projectshow = function(user_project) {
                Projects.submit(user_project).then(function(d) {
                    vm.userproject = d;
                });
            };

            vm.commintsshow = function(user_project) {
                ProjectsCommints.submit(user_project).then(function(d) {
                    vm.commints = d;
                });
            };

            vm.commentsshow = function(user_comments) {
                ProjectsComments.submit(user_comments).then(function(d) {
                    vm.comments = d;
                });
            };
        }]);
})();
