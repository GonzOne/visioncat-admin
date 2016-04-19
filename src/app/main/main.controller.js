(function() {
  'use strict';

  angular
    .module('visioncatAdmin')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;
    $log(vm);

  }
})();
