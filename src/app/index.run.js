(function() {
  'use strict';

  angular
    .module('visioncatAdmin')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
