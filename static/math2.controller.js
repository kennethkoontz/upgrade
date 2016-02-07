angular
    .module('app')
    .controller('Math2Controller', function($scope) {
        $scope.forms = [
            { _id: 'M12', teacher: 'Dave Peterson', description: 'lorem ipsum', students: '20'}    
        ];
        $scope.assignments = [
            { name: 'Unit 4.1', number: 'M001', date: '5/10/16'},
            { name: 'Unit 4 quiz', number: 'M002', date: '5/12/16'},
            { name: 'Unit 4.1 summary', number: 'M003', date: '5/14/16'}
        ];
    });