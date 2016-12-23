(function(){

    angular.module('screen1', ['ui.router']).config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {

        let state = {
            name: 'screen1',
            url: '/screen1',
            templateUrl: 'screen1/view.html',
            controller: 'ctrl',
            controllerAs: 'vm'
        };
        $stateProvider.state(state);
        
    }

})();