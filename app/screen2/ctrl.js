(function(){

    angular.module('screen2').controller('ctrl2', ctrl);

    ctrl.$inject = ['$state'];

    function ctrl($state) {
        let vm = this;
        vm.title = 'Screen 2';
        vm.ch = () => {
            $state.go('screen1');
        }
    }

})();