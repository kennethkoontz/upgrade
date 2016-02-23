angular
    .module('app')
    .controller('English4Controller', function() {
        var vm = this;
        vm.forms = [
            { _id: 'E11', teacher: 'Samantha Harvey', description: 'lorem ipsum', students: '28'}    
        ];
        vm.assignments = [
            { name: 'Narrative', number: 'E001', date: '5/9/16'},
            { name: 'Narrative Prep Page', number: 'E002', date: '5/11/16'},
            { name: 'Unit Test', number: 'E003', date: '5/13/16'}
        ];
    });