angular.module 'fontToFit', []
  .directive 'fontToFit', () ->
    directive =
      restrict: 'A',
      scope:
        text: "=fontToFitText"
        preferred: "=?fontToFitPreffered"
      link: (scope, element, attrs) ->
        resizer = (text) ->
          width = element.width()
          fontSize = parseInt element.css('font-size')
          fontSizeMax = width/text.length
          if ( not scope.preferred ) || scope.preffered > fontSizeMax
            fontSize = Math.min fontSize, fontSizeMax
          else
            fontSize = scope.preffered
          element.css('font-size', fontSize + 'px')
        if attrs.fontToFitUpdate
          scope.$watch 'text', (newValue) ->
            if newValue
              resizer(newValue)
          if scope.preferred
            scope.$watch 'preferred', (newValue) ->
              if newValue and scope.text
                resizer(scope.text)
        else
          resizer(scope.text)
            




