(function() {
    "use strict"
    angular
        .module('commentApp')
        .factory('Contact', factoryContact)
        .factory('ContactDetail', factoryContactDetail)
        .factory('Projects', factoryProjects)
        .factory('ProjectsCommints', factoryProjectsCommints)
        .factory('ProjectsComments', factoryProjectsComments)
        .factory('MyCache', factoryMyCache)
        .factory('GetName', factoryGetName)
        .factory('SetName', factorySetName);

            factoryContact.$inject = ['$http',];
            function factoryContact($http) {
                var _getUser = '';
                var Contact = {
                    submit: function(user) {
                        _getUser = user;
                        // $http returns a promise, which has a then function, which also returns a promise
                        var promise = $http.get("https://api.github.com/users/"+ user +"/repos").then(function (response) {
                            // The then function here is an opportunity to modify the response
                            console.log(response);
                            // The return value gets picked up by the then in the controller.
                            return response.data;
                        });
                        // Return the promise to the controller
                        return promise;
                    },
                    getUser: function(){
                        return _getUser;
                    }
                };
                return Contact;
            };

            factoryContactDetail.$inject = ['$http'];
            function factoryContactDetail($http) {
                var ContactDetail = {
                    submit: function(user_data) {
                        // $http returns a promise, which has a then function, which also returns a promise
                        var promise = $http.get("https://api.github.com/users/"+user_data).then(function (response) {
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
                    submit: function(user, project) {
                        // $http returns a promise, which has a then function, which also returns a promise
                        var promise = $http.get("https://api.github.com/repos/"+user+"/"+project).then(function (response) {
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
                    submit: function(user, project) {
                        // $http returns a promise, which has a then function, which also returns a promise
                        var promise = $http.get("https://api.github.com/repos/"+user+"/"+project+'/commits').then(function (response) {
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

            factoryMyCache.$inject = ['$cacheFactory'];
            function factoryMyCache($cacheFactory) {
                return $cacheFactory('myData');
            };

            factoryGetName.$inject = ['$resource'];
            function factoryGetName($resource) {
                return $resource(
                    "/get/name/",
                    {
                        "get": {method: 'GET'}
                    }
                );
            };

            factorySetName.$inject = ['$resource'];
            function factorySetName($resource) {
                return $resource(
                    "/set/name/:userName", {userName: "@userName" },
                    {
                        "set": {method: 'GET'}
                    }
                );
            };

})();
