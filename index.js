
(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    module.exports = factory(require('angular'));
  } else {
    return factory(root.angular);
  }
})(this, function(angular) {
  'use strict';
  require('angular-sanitize');
  var md = require('markdown');
  var _markdown = md.markdown;
  var moduleName = 'eumis-markdown';
  var mod = angular.module(moduleName, ['ngSanitize']);

  mod.directive('markdownViewer', ['$sce', function($sce) {
    function link(scope, element, attrs) {
      scope.parsedMdText = $sce.trustAsHtml(_markdown.toHTML(scope.rawText));
    }

    return {
      scope: {
        rawText: '=text'
      },
      restrict: 'E',
      template: '<div class="markdown-viewer-wrapper"><span ng-bind-html="parsedMdText"></span></div>',
      link: link
    };
  }]);
  return moduleName;
});
