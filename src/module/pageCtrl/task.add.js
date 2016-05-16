'use strict';
var check = (arr) => {
    var o = {}, d;
    for(let v of arr){
      if("undefined" == typeof v){
        d = "输入不合法！";
        break;
      }
      if(o[v]){
        d = "请去掉重复的！";
        break;
      }else{
        o[v] = 1
      }
    }
    return d
}


export default class TasksAddCtrl {
  constructor($scope, $q, $location, Rest, uibDateParser) {
      $scope.title = '';
      $scope.questions = [];
      $scope.users = [];
      $scope.notice = [];
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
      $scope.removeItem = (type, index) => {
          $scope.t2[type].splice(index, 1);
      }
      $scope.addItem = (type) => {
          $scope.t2[type].push(1);
      }

      $scope.d = {
        date: new Date(),
        minDate: new Date(),
        altFormats: ['M!-d!-yyyy'],
        open(){
          $scope.d.isOpen = true;
        }
      }
      $scope.t2 = {
         hours: [0],
         minutes: [1],
         day: 1
      }
      $scope.b = {
        date: new Date(),
        minDate: new Date(),
        altFormats: ['M!-d!-yyyy'],
        open(){
          $scope.b.isOpen = true;
        }
      }
      var submit = () => {
          if(!$scope.t2.day
            || !$scope.d.date
            || !$scope.b.date){
              alert('请选择持续时间和提醒时间！');
            return
          }

          if($scope.b.date - $scope.d.date < $scope.t2.day*86400000){
              alert('开始结束时间范围要大于间隔天数！');
              return;
          }

          var h = check($scope.t2.hours), m = check($scope.t2.minutes);

          if(h){
            alert(h);
            return;
          }
          if(m){
            alert(m);
            return;
          }

          var fields = {
            title: $scope.title.trim(),
            question: $scope.quest.sid,
            notice: $scope.notice,
            users: $scope.users.filter((item) => item.checked).map((item) => item.uid),
            startDate: $scope.d.date.getTime(),
            endDate: $scope.b.date.getTime(),
            cron: "1 "+ $scope.t2.minutes + " " + $scope.t2.hours + " 1/" + $scope.t2.day,
            reminder: $scope.t2.day + '|' + $scope.t2.hours + '|' + $scope.t2.minutes
          }

          if(!fields.title || !fields.users.length){
            alert('请填写完整');
            return
          }
          let Task = Rest.Task();
          Task.save(fields).$promise.then((response) => {
			        alert('添加成功！');
			        $location.path('/Tasks')
          }, () => { alert('发布失败') })
      }
  }
}
