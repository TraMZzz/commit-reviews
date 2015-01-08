(function() {
    "use strict"
    angular
        .module('commentApp')
        .controller('FormController', ['Contact', function(Contact) {
            var vm = this;
            vm.submit = function(isValid, form_data) {
                if (isValid) {
                    Contact.submit(form_data.user).then(function(d) {
                        vm.userprojects = d;
                    });
                }
            };
        }])
        .controller('UserController', ['ContactDetail', '$routeParams', function(ContactDetail, $routeParams) {
            var vmu = this;
            var user = $routeParams.userName;
            ContactDetail.submit(user).then(function(d) {
                vmu.user = d;
            });
        }])
        .controller('ProjectController', ['Projects', '$routeParams', 'Contact', function(Projects, $routeParams, Contact) {
            var vmp = this;
            var projectName = $routeParams.projectName;
            var user = Contact.getUser();
            Projects.submit(user, projectName).then(function(d) {
                vmp.userproject = d;
            });
        }])
        .controller('CommintsController', ['ProjectsCommints', 'ProjectsComments', '$routeParams', 'Contact', 
                                       function(ProjectsCommints, ProjectsComments, $routeParams, Contact) {
            var vmc = this;
            var project = $routeParams.projectName;
            var user = Contact.getUser();
            ProjectsCommints.submit(user, project).then(function(d) {
                vmc.commints = d;
            });

            vmc.commentsshow = function(user_comments) {
                ProjectsComments.submit(user_comments).then(function(d) {
                    vmc.comments = d;
                });
            };
        }])
})();
