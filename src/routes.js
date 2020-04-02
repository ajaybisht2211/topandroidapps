angular.module('topapps').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider,
   $urlRouterProvider, $locationProvider, $httpProvider) {

   $stateProvider
       .state("home", {
           url: '/',
           views: {
               "mainContent": {
                   'templateUrl': "src/views/home.html"
               }
           }
       })

    // $stateProvider
    //    .state("otherwise", {
    //        url: '*path',
    //        views: {
    //            "mainContent": {
    //                'templateUrl': "src/views/redirecturl.html"
    //            }
    //        }
    //    })
}])