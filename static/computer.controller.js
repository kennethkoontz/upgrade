angular
    .module('app')
    .controller('ComputerController', function() {
        var vm = this;
        vm.forms = [
            { _id: 'T07', teacher: 'Ken Koontz', description: 'lorem ipsum', students: '15'}    
        ];
        vm.assignments = [
            { name: 'History Of JavaScript', number: 'T001', date: '5/10/16'},
            { name: 'CSS Basics', number: 'T002', date: '5/12/16'},
            { name: 'CSS Quiz', number: 'T003', date: '5/14/16'}
        ];
    });