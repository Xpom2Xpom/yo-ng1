(function(){

    angular.module('screen1').controller('ctrl', ctrl);

    ctrl.$inject = ['$state'];

    function ctrl($state) {
        let vm = this;
        vm.title = 'Screen 1';
        vm.ch = () => {
            $state.go('screen2');
        };
    }

})();