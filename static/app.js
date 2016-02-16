angular
  .module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/gradebook");
    $stateProvider
      .state('gradebook', {
        url: "/gradebook",
        templateUrl: "gradebook.html",
        controller: 'GradebookController as GradebookCtrl'
      })
      .state('login', {
        url: "/login",
        templateUrl: "login.html"
        
      })
      .state('classes', {
        url: "/classes",
        templateUrl: "classes.html",
        controller: 'ClassesController as ClassesCtrl'
      })
      .state('register', {
        url: "/register",
        templateUrl: "register.html"
      })
      .state('teachers', {
        url: "/teachers",
        templateUrl: "teachers.html",
        controller: "TeachersController as TeachersCtrl"
      })
    .state('transcripts', {
      url: "/transcripts",
      templateUrl: "transcripts.html"
    })



    .state('worldhistory', {
      url: "/worldhistory",
      templateUrl: "class/worldhistory.html",
      controller: "WhController as WhCtrl"
    })

    .state('art1', {
      url: "/art1",
      templateUrl: "class/art1.html",
      controller: "A1Controller as A1Ctrl"
    })

    .state('biology', {
      url: "/biology",
      templateUrl: "class/biology.html",
      controller: "BiologyController as BiologyCtrl"
    })

    .state('computer', {
      url: "/computer",
      templateUrl: "class/computer.html",
      controller: "ComputerController as ComputerCtrl"
    })

    .state('dp1', {
      url: "/dp1",
      templateUrl: "class/dp1.html",
      controller: 'Dp1Controller as Dp1Ctrl'
    })

    .state('dp23', {
        url: "/dp23",
        templateUrl: "class/dp23.html",
        controller: 'Dp23Controller as Dp23Ctrl'
      })
      .state('english2', {
        url: "/english2",
        templateUrl: "class/english2.html",
        controller: "English2Controller as English2Ctrl"
      })
      .state('english4', {
        url: "/english4",
        templateUrl: "class/english4.html",
        controller: "English4Controller as English4Ctrl"
      })

    .state('hjava', {
      url: "/hjava",
      templateUrl: "class/hjava.html",
      controller: "HjavaController as HjavaCtrl"
    })

    .state('hmath2', {
      url: "/hmath2",
      templateUrl: "class/hmath2.html",
      controller: "Hmath2Controller as Hmath2Ctrl"
    })

    .state('math2', {
      url: "/math2",
      templateUrl: "class/math2.html",
      controller: "Math2Controller as Math2Ctrl"
    })

    .state('matha', {
      url: "/matha",
      templateUrl: "class/matha.html",
      controller: "MathaController as MathaCtrl"
    })

    .state('ushistory', {
      url: "/ushistory",
      templateUrl: "class/ushistory.html",
      controller: "UshController as UshCtrl"
    })





  });
