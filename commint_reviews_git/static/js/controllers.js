(function() {
    "use strict"
    angular
        .module('commentApp')
        .controller("FormController", FormControllerFunc)
        .controller("UserController", UserControllerFunc)
        .controller("ProjectController", ProjectControllerFunc)
        .controller("CommintsController", CommintsControllerFunc);

        FormControllerFunc.$inject = ['Contact'];
        function FormControllerFunc(Contact) {
            var vm = this;
            vm.submit = function(isValid, form_data) {
                if (isValid) {
                    Contact.submit(form_data.user).then(function(d) {
                        vm.userprojects = d;
                    });
                }
            };
        };

        UserControllerFunc.$inject = ['ContactDetail', '$routeParams'];
        function UserControllerFunc(ContactDetail, $routeParams) {
            var vmu = this;
            var user = $routeParams.userName;
            ContactDetail.submit(user).then(function(d) {
                vmu.user = d;
            });
        };

        ProjectControllerFunc.$inject = ['Projects', '$routeParams', 'Contact'];
        function  ProjectControllerFunc(Projects, $routeParams, Contact) {
            var vmp = this;
            var projectName = $routeParams.projectName;
            var user = Contact.getUser();
            Projects.submit(user, projectName).then(function(d) {
                vmp.userproject = d;
            });
        };

        CommintsControllerFunc.$inject = ['ProjectsCommints', 'ProjectsComments', '$routeParams', 'Contact'];
        function CommintsControllerFunc(ProjectsCommints, ProjectsComments, $routeParams, Contact) {
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
        };
})();
