angular.module('topapps', [
       'ui.router',
       'topapps.controllers',
       //'ngSanitize',
       //'ngResource',
       //'urlalias.services',
       //'ngAnimate',
       //'urlalias.env'
   ])
   .run(['$rootScope', '$state', '$window', '$timeout', '$document', '$location', '$http', function($rootScope, $state, $window, $timeout, $document, $location, $http) {

   }]);
angular.module('topapps.controllers', [])