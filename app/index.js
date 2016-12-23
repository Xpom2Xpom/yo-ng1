'use strict';
(function(){

    angular.module('App', ['ui.router', 'screen1', 'screen2']).config(config);

    config.$inject = ['$urlRouterProvider'];

    function config($urlRouterProvider) {

        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('screen1');
        });

    }

})();