'use strict';

export default class QuesEditCtrl {
  constructor($scope, $location, Util, $stateParams, Cfg, Rest) {
    if($stateParams.id * 1 != $stateParams.id){
        $location.path('/question');
        return
    }

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
    let addItem = () => {
        $scope.question.push(
          angular.copy(Cfg.components[$scope.type.value])
        );
    },
    preview = () => {
        Util.openQuestionModal({
          title: $scope.title,
          description: $scope.description,
          question: $scope.question
        });
    },
    reset = () => {
      $scope.title = '';
      $scope.description = '';
      $scope.question = [];
    }
    $scope.$on('removeData', (e, d) => {
      $scope.question.splice(d, 1);
    });

    let Question = Rest.Question();
    Question.get({sid: $stateParams.id*1}).$promise.then((d) => {
        Object.assign($scope, d.data);
        $scope.addItem = addItem;
        $scope.preview = preview;
        $scope.reset = reset;
    }, () => { alert('获取数据失败！'); })
  }
}
