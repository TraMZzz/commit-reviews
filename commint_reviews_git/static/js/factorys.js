(function() {
    "use strict"
    angular
        .module('commentApp')
        .factory('Contact', factoryContact)
        .factory('ContactDetail', factoryContactDetail)
        .factory('Projects', factoryProjects)
        .factory('ProjectsCommints', factoryProjectsCommints)
        .factory('ProjectsComments', factoryProjectsComments);

            factoryContact.$inject = ['$http'];
            function factoryContact($http) {
                var Contact = {
                    submit: function(user) {
                        // $http returns a promise, which has a then function, which also returns a promise
                        var promise = $http.get("https://api.github.com/users/"+ user +"/repos").then(function (response) {
                            // The then function here is an opportunity to modify the response
                            console.log(response);
                            // The return value gets picked up by the then in the controller.
                            return response.data;
                        });
                        // Return the promise to the controller
                        return promise;
                    }
                };
                return Contact;
            };

            factoryContactDetail.$inject = ['$http'];
            function factoryContactDetail($http) {
                var ContactDetail = {
                    submit: function(user_data) {
                        // $http returns a promise, which has a then function, which also returns a promise
                        var promise = $http.get(user_data).then(function (response) {
                            // The then function here is an opportunity to modify the response
                            console.log(response);
                            // The return value gets picked up by the then in the controller.
                            return response.data;
                        });
                        // Return the promise to the controller
                        return promise;
                    }
                };
                return ContactDetail;
            };

            factoryProjects.$inject = ['$http'];
            function factoryProjects($http) {
                var Projects = {
                    submit: function(user_project) {
                        // $http returns a promise, which has a then function, which also returns a promise
                        var promise = $http.get(user_project).then(function (response) {
                            // The then function here is an opportunity to modify the response
                            console.log(response);
                            // The return value gets picked up by the then in the controller.
                            return response.data;
                        });
                        // Return the promise to the controller
                        return promise;
                    }
                };
                return Projects;
            };


            factoryProjectsCommints.$inject = ['$http'];
            function factoryProjectsCommints($http) {
                var ProjectsCommints = {
                    submit: function(user_project) {
                        // $http returns a promise, which has a then function, which also returns a promise
                        var promise = $http.get(user_project+'/commits').then(function (response) {
                            // The then function here is an opportunity to modify the response
                            console.log(response);
                            // The return value gets picked up by the then in the controller.
                            return response.data;
                        });
                        // Return the promise to the controller
                        return promise;
                    }
                };
                return ProjectsCommints;
            };

            factoryProjectsComments.$inject = ['$http'];
            function factoryProjectsComments($http) {
                var ProjectsComments = {
                    submit: function(user_comments) {
                        // $http returns a promise, which has a then function, which also returns a promise
                        var promise = $http.get(user_comments).then(function (response) {
                            // The then function here is an opportunity to modify the response
                            console.log(response);
                            // The return value gets picked up by the then in the controller.
                            return response.data;
                        });
                        // Return the promise to the controller
                        return promise;
                    }
                };
                return ProjectsComments;
            };

})();
