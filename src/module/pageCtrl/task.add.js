'use strict';

export default class TasksAddCtrl {
  constructor($scope, $q, Rest, Util, Cfg, uibDateParser) {
      $scope.title = '';
      $scope.questions = [];
      $scope.users = [];
      let User = Rest.User(), Question = Rest.Question();
      $q.all([
          User.query({}).$promise,
          Question.query({}).$promise
      ]).then((response) => {
          $scope.users = response[0].data.filter((item) => !item.question.length);
          $scope.questions = response[1].data;
          $scope.quest = $scope.questions[0];
          $scope.submit = submit;
      }, () => { alert('request error') })

      $scope.selected = (index) => {
          $scope.users[index].checked = !$scope.users[index].checked;
      }

      $scope.d = {
        date: new Date(),
        minDate: new Date(),
        altFormats: ['M!/d!/yyyy'],
        open(){
          $scope.d.isOpen = true;
        }
      }
      $scope.t2 = {
         time: new Date(),
         ismeridian: false,
         day: 1
      }
      $scope.b = {
        date: new Date(),
        minDate: new Date(),
        altFormats: ['M!/d!/yyyy'],
        open(){
          $scope.b.isOpen = true;
        }
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
          let Task = Rest.Task();
          Task.save(fields).$promise.then((response) => {
              console.log(response);
          }, () => { alert('发布失败') })
      }
  }
}
