angular
    .module('app')
    .controller('GradebookController', function() {
        var vm = this;
        vm.assignments = [
            { number: 1, name: 'History of Javascript', date_assigned: '5/11/16', date_graded: '5/18/16', grade: '10/10'},
            { number: 2, name: 'CSS Basics', date_assigned: '5/13/16', date_graded: '5/20/16', grade: '24/25'},
        ];
            
    });