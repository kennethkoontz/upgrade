angular
    .module('app')
    .controller('GradebookController', function() {
        var vm = this;
        vm.classes = [
            { period: 1, name: 'World History', class_id: 'H05', grade: 'A+' },
            { period: 2, name: 'Math 2', class_id: 'M12', grade: 'A'},
            { period: 3, name: 'Art 1', class_id: 'A01', grade: 'B+'},
            { period: 4, name: 'Biology', class_id: 'S19', grade: 'C-'},
            { period: 5, name: 'Computer Programming', class_id: 'T02', grade: 'A'},
            { period: 6, name: 'English 2', class_id: 'E09', grade: 'A-'},
        ];
        vm.assignments = [
            { number: 1, name: 'History of Javascript', date_assigned: '5/11/16', date_graded: '5/18/16', grade: '10/10'},
            { number: 2, name: 'CSS Basics', date_assigned: '5/13/16', date_graded: '5/20/16', grade: '24/25'},
        ];
            
    });