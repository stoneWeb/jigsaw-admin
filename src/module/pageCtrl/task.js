'use strict';
var findBySid = (d, sid) => {
    for(let k of d){
        if(k.sid == sid){
          return k
        }
    }
    return null
}

export default class TasksCtrl {
  constructor($scope, $q, Rest, Util) {
    $scope.list = [
      {
        checked: false,
        title: '第一个任务',
        users: 15,
        question: '第一个问卷',
        reminder: 25,
        startDate: '2016-08-08',
        endDate: '2016-08-09'
      }
    ];
    let Task = Rest.Task(), Question = Rest.Question();
    $q.all([
        Task.query().$promise,
        Question.query().$promise
    ]).then((response) => {
        $scope.list = response[0].data.map((item) => {
            let q = findBySid(response[1].data, item.question);
            item.users = item.users.length;
            item.reminder = item.reminder.replace('|', 'day ');
            item.startDate = Util.formatDate(new Date(item.startDate));
            item.endDate = Util.formatDate(new Date(item.endDate));
            item.question = q?q.title:'';
            return item
        });
    }, () => {alert('请求失败！')})
    $scope.ckAll = (e) => {
      for(let item of $scope.list){
        item.checked = e.target.checked
      }
    }
  }
}
