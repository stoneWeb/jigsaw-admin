'use strict';

export default () => {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      item: '='
    },
    template: require('../../tpl/inputcomponents/radio.html'),
    link($scope, $elem, $attr){
      $scope.removeItem = (index) => {
          let len = $scope.item.options.length;
          len > 1 && $scope.item.options.splice(index, 1);
      }
      $scope.addItem = () => {
          $scope.item.options.push('');
      }
      $scope.removeData = () => {
        $scope.$emit('removeData', $attr.index);
      }
    }
  }
}
