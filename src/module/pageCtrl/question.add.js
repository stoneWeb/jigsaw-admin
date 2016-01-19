'use strict';

let defTplData = {
  "textInput": {
    type: 'textInput',
    text: ''
  },
  "radio": {
    type: 'radio',
    options: ['']
  },
  "multi": {
    type: 'multi',
    options: ['']
  }
};

export default class QuesAddCtrl {
  constructor($scope) {
    $scope.data = [];

    $scope.typeoptions = [
      {
        name: 'text Input',
        value: 'textInput'
      },
      {
        name: 'radio',
        value: 'radio'
      },
      {
        name: 'multi',
        value: 'multi'
      }
    ];
    $scope.type = $scope.typeoptions[0];
    $scope.addItem = () => {
      let data = defTplData[$scope.type.value]
      $scope.data.push(data);
    }
    $scope.$on('removeData', (e, d) => {
        console.log(d);
    });
  }
}
