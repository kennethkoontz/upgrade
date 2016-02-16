angular
    .module('app')
    .controller('ClassesController', function($scope) {
        var vm = this;
        vm.classes = [
          { period: 1, name: 'World History', class_id: 'H05', teacher: 'Smith, Henry', teacher_id: '61818'},
          { period: 2, name: 'Math 2', class_id: 'M12', teacher: 'Dave Peterson', teacher_id: '78392'},
          { period: 3, name: 'Art 1', class_id: 'A01', teacher: 'Kate Waldner', teacher_id: '17542'},
          { period: 4, name: 'Biology', class_id: 'S19', teacher: 'Eddie Hughes', teacher_id: '97324'},
          { period: 5, name: 'Computer Programming', class_id: 'T02', teacher: 'Ken Koontz', teacher_id: '92345'},
          { period: 6, name: 'English 2', class_id: 'E09', teacher: 'Samantha Harvey', teacher_id: '36345'}
        ];
        
    });