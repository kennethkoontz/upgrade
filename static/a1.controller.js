angular
    .module('app')
    .controller('A1Controller', function(){
        var vm=this;
        vm.forms = [
            { _id: 'A01', teacher: 'Kate Waldner', description: 'lorem ipsum', students: '21'}    
        ];
        vm.assignments = [
            { name: 'Sketchbook entry #3', number: 'A001', date: '5/9/16'},
            { name: 'Sketchbook entry #4', number: 'A002', date: '5/11/16'},
            { name: 'Pop Art Draft', number: 'A003', date: '5/13/16'}
        ];
        
        
    });