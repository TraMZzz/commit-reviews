(function() {
    "use strict"
    var app = angular
        .module("commentApp", ['ngRoute', 'ngResource'])
        .config(['$interpolateProvider', '$routeProvider',
            function($interpolateProvider, $routeProvider) {
                $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        }]);
})();
