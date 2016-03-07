'use strict';

export default class QuesEditCtrl {
  constructor($scope, $location, Util, $stateParams, Cfg, Rest) {
    var oldData;
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
    },
    submit = () => {
      let sender = {};
      let data = {
          title: $scope.title.trim(),
          description: $scope.description.trim(),
          question: $scope.question
      };
      if(data.title.length < 1 || data.question.length < 1){
          alert('标题和问题必填！');
          return
      }
      if(oldData.title != data.title){
          sender.title = data.title
      }
      if(oldData.description != data.description){
          sender.description = data.description
      }

      if(JSON.stringify(oldData.question) != JSON.stringify(data.question)){
          sender.question = data.question
      }

      let Question = Rest.Question();
      Question.update({sid: $scope.sid}, sender).$promise.then(() => {
          alert('修改成功！');
          $location.path('/questions')
      }, () => { alert('修改失败！')})
    }
    $scope.$on('removeData', (e, d) => {
      $scope.question.splice(d, 1);
    });



    let Question = Rest.Question();
    Question.get({sid: $stateParams.id*1}).$promise.then((d) => {
        oldData = angular.copy(d.data);
        Object.assign($scope, d.data);
        $scope.addItem = addItem;
        $scope.preview = preview;
        $scope.reset = reset;
        $scope.submit = submit;
    }, () => { alert('获取数据失败！'); })
  }
}
