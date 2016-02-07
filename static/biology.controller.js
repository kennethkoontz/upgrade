angular
    .module('app')
    .controller('BiologyController', function($scope) {
        $scope.forms = [
            { _id: 'S19', teacher: 'Eddie Hughes', description: 'lorem ipsum', students: '24'}    
        ];
        $scope.assignments = [
            { name: 'Graphing Wkst', number: 'S001', date: '5/11/16'},
            { name: 'Predictions Wksht', number: 'S002', date: '5/13/16'},
            { name: 'Quiz 6.1', number: 'S003', date: '5/15/16'}
        ];
    });