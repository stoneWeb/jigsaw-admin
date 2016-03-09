'use strict';
var findIndexBySid = (d, sid) => {
    for(var i=0,item; item=d[i]; i++){
        if(item.sid == sid)
            return i
    }
    return 0
}
export default class TasksEditCtrl {
  constructor($scope, $stateParams, $location, $q, Rest, Util) {
    if($stateParams.id * 1 != $stateParams.id){
        $location.path('/tasks');
        return
    }
    $scope.title = '';
    $scope.questions = [];
    $scope.users = [];

    let User = Rest.User(), Question = Rest.Question(), Task = Rest.Task(), oldData;
    $q.all([
        User.query({}).$promise,
        Question.query({}).$promise,
        Task.get({sid: $stateParams.id}).$promise
    ]).then((response) => {
        var task = response[2].data,
            reminder = task.reminder.split('|'),
            time = reminder[1].split(':'),
            d = new Date();
        oldData = task;
        d.setHours(time[0]);
        d.setMinutes(time[1]);
        $scope.title = task.title;
        $scope.users = response[0].data
          .filter((item) => {
              let q = item.question || [];
              if('undefined' != typeof q.find((n) => n == task.question))
                  item.checked = true;
                  return true
              if(!q.length)
                  return true
              return false
          });
        $scope.questions = response[1].data;
        $scope.quest = $scope.questions[findIndexBySid($scope.questions, task.question)];
        $scope.t2 = {
           time: d,
           ismeridian: false,
           day: reminder[0]*1
        }
        $scope.d = {
          date: new Date(task.startDate),
          altFormats: ['M!/d!/yyyy'],
          open(){
            $scope.d.isOpen = true;
          }
        }
        $scope.b = {
          date: new Date(task.endDate),
          altFormats: ['M!/d!/yyyy'],
          open(){
            $scope.d.isOpen = true;
          }
        }
        $scope.submit = Date.now() > task.startDate?
          () => {
            alert('任务已经开始，不能修改！');
          }: submit;
    }, () => { alert('request error') });
    $scope.selected = (index) => {
        $scope.users[index].checked = !$scope.users[index].checked;
    }
    var submit = () => {
        if(!$scope.t2.time
          || !$scope.t2.day
          || !$scope.d.date
          || !$scope.b.date){
            alert('请选择持续时间和提醒时间！');
          return
        }

        var fields = {
          title: $scope.title.trim(),
          question: $scope.quest.sid,
          users: $scope.users.filter((item) => item.checked).map((item) => item.uid),
          startDate: $scope.d.date.getTime(),
          endDate: $scope.b.date.getTime(),
          reminder: $scope.t2.day + '|' + $scope.t2.time.getHours()+':'+$scope.t2.time.getMinutes()
        }
        if(fields.endDate - fields.startDate < 86400000){
          alert('结束时间要大于起始时间');
          return
        }
        if(!fields.title || !fields.users.length){
          alert('请填写完整');
          return
        }
        if(oldData.title == fields.title){
            delete fields.title
        }
        if(oldData.question == fields.question){
            delete fields.question
        }
        if(oldData.startDate == fields.startDate){
            delete fields.startDate
        }
        if(oldData.endDate == fields.endDate){
            delete fields.endDate
        }
        if(oldData.reminder == fields.reminder){
            delete fields.reminder
        }
        if(oldData.users.sort((a,b) => a-b).toString() == fields.users.sort((a,b) => a-b).toString()){
            delete fields.users
        }
        if(!Util.checkEmptyObject(fields)){
            $location.path('/tasks');
            return;
        }
        let Task = Rest.Task();
        Task.update({sid: $stateParams.id}, fields).$promise.then((response) => {
            $location.path('/Tasks')
        }, () => { alert('更新失败') })
    }
  }
}
