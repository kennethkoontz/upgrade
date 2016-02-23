angular
    .module('app')
    .controller('MathaController', function() {
        var vm = this;
        vm.forms = [
            { _id: 'M11', teacher: 'Dave Peterson', description: 'lorem ipsum', students: '16'}    
        ];
        vm.assignments = [
            { name: 'Unit 5.2', number: 'M001', date: '5/9/16'},
            { name: 'Unit 5 notes', number: 'M002', date: '5/11/16'},
            { name: 'Unit 5.1 summary', number: 'M003', date: '5/13/16'}
        ];
        
    });