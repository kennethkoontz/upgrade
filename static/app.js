angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/gradebook");
      $stateProvider
        .state('gradebook', {
          url: "/gradebook",
          templateUrl: "gradebook.html"
        })
    });
