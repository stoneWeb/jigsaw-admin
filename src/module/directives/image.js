'use strict';

export default () => {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
          item: '='
        },
        template: require('../../tpl/inputcomponents/image.html'),
        link($scope, $elem, $attr){
          $scope.removeData = () => {
            $scope.$emit('removeData', $attr.index);
          }
        }
    }
}
