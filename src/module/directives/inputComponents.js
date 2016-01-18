'use strict';
const template = {
  'textInput': require('../../tpl/inputcomponents/textInput.html')
}
//data format
/*
[
  0: {
    type: 'textInput',
    text: '问题'
  },
  1: {
    type: 'radio',
    options: ['文字1', '文字2']
  },
  2: {
    type: 'multi',
    options: ['文字1', '文字2']
  }
]
*/

export default angular.module('App.directives', [])
  .directive('inputcomponents', () => {
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    template: '<div></div>',
    link($scope, $elem, $attr){

    }
  }
});
