(function() {
    "use strict"
    angular
        .module('commentApp')
        .controller("FormController", FormControllerFunc)
        .controller("UserController", UserControllerFunc)
        .controller("ProjectController", ProjectControllerFunc)
        .controller("CommintsController", CommintsControllerFunc);

        FormControllerFunc.$inject = ['Contact', 'SetName'];
        function FormControllerFunc(Contact, SetName) {
            var vm = this;
            vm.submit = function(isValid, form_data) {
                if (isValid) {
                    SetName.set({},{'userName': form_data.user});
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

        ProjectControllerFunc.$inject = ['Projects', '$routeParams', 'GetName'];
        function  ProjectControllerFunc(Projects, $routeParams, GetName) {
            var vmp = this;
            var projectName = $routeParams.projectName;
            GetName.get().$promise.then(function(date) {
                Projects.submit(date.name, projectName).then(function(d) {
                    vmp.userproject = d;
                });
            });
        };

        CommintsControllerFunc.$inject = ['ProjectsCommints', 'ProjectsComments', '$routeParams', 'GetName'];
        function CommintsControllerFunc(ProjectsCommints, ProjectsComments, $routeParams, GetName) {
            var vmc = this;
            var project = $routeParams.projectName;
            GetName.get().$promise.then(function(date) {
                ProjectsCommints.submit(date.name, project).then(function(d) {
                    vmc.commints = d;
                });
            });

            vmc.commentsshow = function(user_comments) {
                ProjectsComments.submit(user_comments).then(function(d) {
                    vmc.comments = d;
                });
            };
        };
})();
