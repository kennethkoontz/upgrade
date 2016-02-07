angular
    .module('app')
    .controller('English2Controller', function($scope) {
        $scope.forms = [
            { _id: 'E09', teacher: 'Samantha Harvey', description: 'lorem ipsum', students: '27'}    
        ];
        $scope.assignments = [
            { name: 'Prepping to Write', number: 'W001', date: '5/10/16'},
            { name: 'Library Participation', number: 'W002', date: '5/12/16'},
            { name: 'Research Paper Folder', number: 'W003', date: '5/14/16'}
        ];
    });