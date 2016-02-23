angular
    .module('app')
    .controller('Dp1Controller', function() {
        var vm = this;
        vm.forms = [
            { _id: 'A02', teacher: 'Kate Waldner', description: 'lorem ipsum', students: '22'}    
        ];
        vm.assignments = [
            { name: 'Sketchbook day 13', number: 'A001', date: '5/9/16'},
            { name: 'Sketching Project', number: 'W002', date: '5/11/16'},
            { name: 'Sketching Summary', number: 'W003', date: '5/15/16'}
        ];
        
    });