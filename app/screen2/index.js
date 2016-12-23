(function(){

    angular.module('screen2', ['ui.router']).config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {

        let state = {
            name: 'screen2',
            url: '/screen2',
            templateUrl: 'screen2/view.html',
            controller: 'ctrl2',
            controllerAs: 'vm'
        };
        $stateProvider.state(state);
        
    }

})();