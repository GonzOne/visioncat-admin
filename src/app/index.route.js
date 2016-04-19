(function() {
  'use strict';

  angular
    .module('visioncatAdmin')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
