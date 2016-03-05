'use strict';
export default class QuesCtrl {
  constructor($scope, Util, Cfg, Rest) {
    $scope.query = '';
    let Question = Rest.Question();
    Question.query({})
      .$promise.then(
        (d) => {
            $scope.list = d.data;
        },
        () => {
           console.log('request question error!');
        }
      );
    $scope.remove = (index) => {
        let d = $scope.list[index];
        if(window.confirm('你确定删除此条数据？')){
            let Question = Rest.Question();
            Question.delete({sid: d.sid}).$promise.then(() => {
                alert('删除成功！');
                $scope.list.splice(index, 1);
            }, () => { alert('删除失败！') });
        }
    }
    $scope.preview = (index) => {
      Util.openQuestionModal($scope.list[index]);
    }

  }
}
