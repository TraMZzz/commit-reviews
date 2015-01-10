(function() {
    "use strict"
    angular
        .module('commentApp', ['ngRoute', 'ngResource'])
        .config(['$interpolateProvider', '$routeProvider',
            function($interpolateProvider, $routeProvider) {
                $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
                $routeProvider
                .when('/', {
                    templateUrl: '/static/partials/form.html',
                    controller: 'FormController',
                    controllerAs: 'vm'
                })
                .when('/user/:userName', {
                    templateUrl: '/static/partials/user.html',
                    controller: 'UserController',
                    controllerAs: 'vmu'
                })
                .when('/commints/:projectName', {
                    templateUrl: '/static/partials/commints.html',
                    controller: 'CommintsController',
                    controllerAs: "vmc"
                })
                .when('/git/project/:projectName', {
                    templateUrl: '/static/partials/project.html',
                    controller: 'ProjectController',
                    controllerAs: "vmp"
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
})();
