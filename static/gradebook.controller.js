angular
    .module('app')
    .controller('GradebookController', function() {
<<<<<<< HEAD
        var vm = this;
=======
        var vm = this
        vm.classes = [
          { period: 1, name: 'World History', class_id: 'H05', teacher: 'Smith, Henry', teacher_id: '61818', grade: 'A-'},
          { period: 2, name: 'Math 2', class_id: 'M12', teacher: 'Dave Peterson', teacher_id: '78392', grade: 'B+'},
          { period: 3, name: 'Art 1', class_id: 'A01', teacher: 'Kate Waldner', teacher_id: '17542', grade: 'A'},
          { period: 4, name: 'Biology', class_id: 'S19', teacher: 'Eddie Hughes', teacher_id: '97324', grade: 'A-'},
          { period: 5, name: 'Computer Programming', class_id: 'T02', teacher: 'Ken Koontz', teacher_id: '92345', grade: 'B'},
          { period: 6, name: 'English 2', class_id: 'E09', teacher: 'Samantha Harvey', teacher_id: '36345', grade: 'A+'}
        ];
>>>>>>> 05b4575050e725f8c555ec118c047987909b2888
        vm.assignments = [
            { number: 1, name: 'History of Javascript', date_assigned: '5/11/16', date_graded: '5/18/16', grade: '10/10'},
            { number: 2, name: 'CSS Basics', date_assigned: '5/13/16', date_graded: '5/20/16', grade: '24/25'},
        ];
            
    });