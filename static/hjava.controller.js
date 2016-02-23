angular
    .module('app')
    .controller('HjavaController', function() {
        var vm = this;
        vm.forms = [
            { _id: 'T01', teacher: 'Ken Koontz', description: 'lorem ipsum', students: '6'}    
        ];
        vm.assignments = [
            { name: 'Java Review', number: 'C001', date: '5/10/16'},
            { name: 'Java Project Mockup', number: 'C002', date: '5/12/16'},
            { name: 'Java Project 1', number: 'C003', date: '5/14/16'}
        ];
    });