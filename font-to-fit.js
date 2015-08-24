(function() {
  angular.module('fontToFit', []).directive('fontToFit', function() {
    var directive;
    return directive = {
      restrict: 'A',
      scope: {
        text: "=fontToFitText"
      },
      link: function(scope, element, attrs) {
        var resizer;
        resizer = function(text) {
          var fontSize, fontSizeMax, width;
          width = element.width();
          fontSize = parseInt(element.css('font-size'));
          fontSizeMax = width / text.length;
          fontSize = Math.min(fontSize, fontSizeMax);
          return element.css('font-size', fontSize + 'px');
        };
        if (attrs.fontToFitUpdate) {
          return scope.$watch('text', function(newValue) {
            if (newValue) {
              return resizer(newValue);
            }
          });
        } else {
          return resizer(scope.text);
        }
      }
    };
  });

}).call(this);
