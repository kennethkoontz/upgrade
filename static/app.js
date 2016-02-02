angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/gradebook");
      $stateProvider
        .state('gradebook', {
          url: "/gradebook",
          templateUrl: "gradebook.html"
        })
  .state('admin', {
          url: "/admmin",
          templateUrl: "admin.html"
        })
  .state('classes', {
          url: "/classes",
          templateUrl: "classes.html"
        })
  .state('index', {
          url: "/index",
          templateUrl: "index.html"
        })
        .state('register', {
          url: "/register",
          templateUrl: "register.html"
        })
  .state('teachers', {
          url: "/teachers",
          templateUrl: "teachers.html"
        })
  
  .state('transcripts', {
          url: "/transcripts",
          templateUrl: "transcripts.html"
        });
  
  
  
  
  
  
  
    });
    
