'use strict';
const template = {
  'textInput': require('../../tpl/inputcomponents/textInput.html')
}

export default angular.module('App.directives', [])
  .directive('textinput', () => {
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    template: require('../../tpl/inputcomponents/textInput.html'),
    link($scope, $elem, $attr){
      $scope.$emit('removeData', 'abc');
    }
  }
});
