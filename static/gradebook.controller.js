angular
    .module('app')
    .controller('GradebookController', function($scope) {
        $scope.classes = [
            { period: 1, name: 'World History', class_id: 'HO5', grade: 'A+' }
        ];
            
    });