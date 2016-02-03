angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/gradebook");
      $stateProvider
        .state('gradebook', {
          url: "/gradebook",
          templateUrl: "gradebook.html",
          controller: 'GradebookController'
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
        })
        
        
        
        .state('worldhistory', {
          url: "/worldhistory",
          templateUrl: "class/worldhistory.html"
        })
        
        .state('art1', {
          url: "/art1",
          templateUrl: "class/art1.html"
        })
        
        .state('biology', {
          url: "/biology",
          templateUrl: "class/biology.html"
        })
        
        .state('computer', {
          url: "/computer",
          templateUrl: "class/computer.html"
        })
        
        .state('dp1', {
          url: "/dp1",
          templateUrl: "class/dp1.html"
        })
        
        .state('dp23', {
          url: "/dp23",
          templateUrl: "class/dp23.html"
        })
        .state('english2', {
          url: "/english2",
          templateUrl: "class/english2.html"
        })
        .state('english4', {
          url: "/english4",
          templateUrl: "class/english4.html"
        })
        
        .state('hjava', {
          url: "/hjava",
          templateUrl: "class/hjava.html"
        })
        
        .state('hmath2', {
          url: "/hmath2",
          templateUrl: "class/hmath2.html"
        })
        
        .state('math2', {
          url: "/math2",
          templateUrl: "class/math2.html"
        })
  
        .state('matha', {
          url: "/matha",
          templateUrl: "class/matha.html"
        })
        
        .state('ushistory', {
          url: "/ushistory",
          templateUrl: "class/ushistory.html"
        })
  
  
  
  
  
    });
    
