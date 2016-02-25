'use strict';

export default class QuesAddCtrl {
  constructor($scope, Util, Cfg) {
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
      },
      {
        name: 'image',
        value: 'image'
      }
    ];
    $scope.type = $scope.typeoptions[0];
    $scope.addItem = () => {
      $scope.data.push(
        angular.copy(Cfg.components[$scope.type.value])
      );
    }
    $scope.$on('removeData', (e, d) => {
      $scope.data.splice(d, 1);
    });
    $scope.preview = () => {
      Util.openQuestionModal({
        title: $scope.title,
        description: $scope.description,
        items: $scope.data
      });
    }
    $scope.reset = () => {
      $scope.title = '';
      $scope.description = '';
      $scope.data = [];
    }
  }
}
