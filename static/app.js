angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/gradebook");
      $stateProvider
        .state('gradebook', {
          url: "/gradebook",
          templateUrl: "gradebook.html"
        })
  .state('login', {
          url: "/login",
          templateUrl: "login.html"
        })
  .state('classes', {
          url: "/classes",
          templateUrl: "classes.html"
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
    
