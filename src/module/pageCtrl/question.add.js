'use strict';

let defTplData = {
  "textInput": {
    type: 'textInput',
    title: ''
  },
  "radio": {
    type: 'radio',
    title: '',
    options: ['']
  },
  "multi": {
    type: 'multi',
    title: '',
    options: ['']
  }
};
let previewTpl = require('../../tpl/question_preview.html');

export default class QuesAddCtrl {
  constructor($scope, $uibModal) {
    $scope.title = '';
    $scope.description = '';
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
      $scope.data.push(angular.copy(defTplData[$scope.type.value]));
    }
    $scope.$on('removeData', (e, d) => {
      $scope.data.splice(d, 1);
    });
    $scope.preview = () => {
      var modalInstance = $uibModal.open({
        animation: true,
        template: previewTpl,
        controller: 'ModalCtrl',
        size: 'sm',
        resolve: {
          data(){
            return {
              title: $scope.title,
              description: $scope.description,
              items: $scope.data
            };
          }
        }
      });
    }
    $scope.reset = () => {
      $scope.title = '';
      $scope.description = '';
      $scope.data = [];
    }
  }
}
