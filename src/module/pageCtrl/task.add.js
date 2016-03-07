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
          $scope.users = response[0].data;
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
      $scope.t1 = {
         time: new Date(),
         ismeridian: false
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
          
      }
  }
}
