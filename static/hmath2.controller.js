angular
    .module('app')
    .controller('Hmath2Controller', function($scope) {
        $scope.forms = [
            { _id: 'M11', teacher: 'Dave Peterson', description: 'lorem ipsum', students: '12'}    
        ];
        $scope.assignments = [
            { name: 'Unit 4.1 notes', number: 'C001', date: '5/9/16'},
            { name: 'Unit 4 test', number: 'C002', date: '5/11/16'},
            { name: 'Unit 4.1 summary', number: 'C003', date: '5/13/16'}
        ];
    });