(function() {
  angular.module('fontToFit', []).directive('fontToFit', function() {
    var directive;
    return directive = {
      restrict: 'A',
      scope: {
        text: "=fontToFitText",
        preferred: "=?fontToFitPreffered"
      },
      link: function(scope, element, attrs) {
        var resizer;
        resizer = function(text) {
          var fontSize, fontSizeMax, width;
          width = element.width();
          fontSize = parseInt(element.css('font-size'));
          fontSizeMax = width / text.length;
          if ((!scope.preferred) || scope.preffered > fontSizeMax) {
            fontSize = Math.min(fontSize, fontSizeMax);
          } else {
            fontSize = scope.preffered;
          }
          return element.css('font-size', fontSize + 'px');
        };
        if (attrs.fontToFitUpdate) {
          scope.$watch('text', function(newValue) {
            if (newValue) {
              return resizer(newValue);
            }
          });
          if (scope.preferred) {
            return scope.$watch('preferred', function(newValue) {
              if (newValue && scope.text) {
                return resizer(scope.text);
              }
            });
          }
        } else {
          return resizer(scope.text);
        }
      }
    };
  });

}).call(this);
