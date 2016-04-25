angular
    .module('app')
    .controller('WhController', function() {
        var vm = this;
        vm.forms = [
            { _id: 'H05', teacher: 'Henry Smith', description: 'The focus of this course is the study of the historical development of people, places, and patterns of life from ancient times until 1500 AD. Students will use skills of historical and geographical analysis to explore the early history of the world.', students: '29'}    
        ];
        vm.assignments = [
            { name: 'Early Chinese Dynasties', number: 'W001', date: '5/10/16'},
            { name: 'Chinese Wars', number: 'W002', date: '5/12/16'},
            { name: 'Asian Religions', number: 'W003', date: '5/14/16'}
        ];
        
    });