angular
    .module('app')
    .controller('TeachersController', function($scope) {
        $scope.teachers = [
          { name: 'Henry Smith', _id: '61818', class_1:'World History', class_2: 'US History', class_3: '', room: '42'},
          { name: 'Dave Peterson', _id:'78392', class_1:'Math 2', class_2: 'Honors Math 2', class_3: 'Math Analysis', room: '16'},
          { name: 'Kate Waldner', _id:'17542', class_1:'Art 1', class_2: 'Drawing & Painting 1', class_3: 'Drawing & Painting 2-3', room: '76'},
          { name: 'Eddie Hughes', _id:'97324', class_1:'Biology', class_2: '', class_3: '', room: '10'},
          { name: 'Ken Koontz', _id:'93245', class_1:'Computer Programming', class_2: 'Honors JavaScript', class_3: '', room: '02'},
          { name: 'Samantha Harvey', _id:'36345', class_1:'English 2', class_2: 'English 4', class_3: '', room: '23'}
          
        ];
        
    });