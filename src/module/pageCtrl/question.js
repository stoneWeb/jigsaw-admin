'use strict';
export default class QuesCtrl {
  constructor($scope, Util, Cfg) {
    
    $scope.preview = (index) => {
      Util.openQuestionModal({
        title: '标题',
        description: '信息',
        items: [
          {
            type: 'textInput',
            title: '你住哪里？'
          }
        ]
      });
    }

  }
}
