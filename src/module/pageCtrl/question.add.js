'use strict';

export default class QuesAddCtrl {
  constructor($scope, $location, Rest, Util, Cfg) {
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
        question: $scope.data
      });
    }
    $scope.submit = () => {
      let data = {
          title: $scope.title.trim(),
          description: $scope.description.trim(),
          question: $scope.data
      };
      if(data.title.length < 1 || data.question.length < 1){
          alert('标题和问题必填！');
          return
      }
      let Question = Rest.Question();
      Question.save(data).$promise.then(() => {
          alert('添加成功！');
          $location.path('/questions')
      }, () => { alert('添加失败！')})
    }
    $scope.reset = () => {
      $scope.title = '';
      $scope.description = '';
      $scope.data = [];
    }
  }
}
