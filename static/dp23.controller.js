angular
    .module('app')
    .controller('Dp23Controller', function($scope) {
        $scope.forms = [
            { _id: 'A03', teacher: 'Kate Waldner', description: 'lorem ipsum', students: '19'}    
        ];
        $scope.assignments = [
            { name: 'Sketchbook Week 4', number: 'W001', date: '5/10/16'},
            { name: 'Acrylic Unit', number: 'W002', date: '5/12/16'},
            { name: 'Unit Test', number: 'W003', date: '5/14/16'}
        ];
    });