angular
    .module('app')
    .controller('UshController', function() {
        var vm = this;
        vm.forms = [
            { _id: 'H02', teacher: 'Henry Smith', description: 'lorem ipsum', students: '36'}    
        ];
        vm.assignments = [
            { name: 'The Revolutionary War', number: 'W001', date: '5/10/16'},
            { name: 'George Washington WKST', number: 'W002', date: '5/12/16'},
            { name: 'War Project', number: 'W003', date: '5/14/16'}
        ];
    });