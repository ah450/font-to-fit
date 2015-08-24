angular.module 'fontToFit', []
  .directive 'fontToFit', () ->
    directive =
      restrict: 'A',
      scope: {
        text: "=fontToFitText"
      },
      link: (scope, element, attrs) ->
        resizer = (text) ->
          width = element.width()
          fontSize = parseInt element.css('font-size')
          fontSizeMax = width/text.length
          fontSize = Math.min fontSize, fontSizeMax
          element.css('font-size', fontSize + 'px')
        if attrs.fontToFitUpdate
          $scope.$watch 'text', (newValue) ->
            if newValue
              resizer(text)
        else
          resizer(scope.text)
            




