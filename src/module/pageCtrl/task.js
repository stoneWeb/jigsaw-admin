'use strict';
export default class TasksCtrl {
  constructor($scope) {
    $scope.list = [
      {
        checked: false,
        title: '第一个任务',
        usersLength: 15,
        question: '第一个问卷',
        reminder: 25,
        duration: '2016-08-08 20:00:00'
      }
    ];
    $scope.ckAll = (e) => {
      for(let item of $scope.list){
        item.checked = e.target.checked
      }
    }
  }
}
