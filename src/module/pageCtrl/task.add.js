'use strict';

export default class TasksAddCtrl {
  constructor($scope, Util, Cfg, uibDateParser) {
      $scope.title = 'abc';
      $scope.questions = [
        {
          id:0,
          title: '第一个问卷'
        },
        {
          id:1,
          title: '第二个问卷'
        }
      ];
      $scope.users = [
        {
          checked: false,
          name: 'Lei',
          email: 'leidin@microsoft.com',
          gender: 'male',
          age: '28',
          job: 'Dev',
          mobileos: 'IOS',
          mobilebd: 'Apple',
          pcos: 'Window 8',
          state: '1',
          location: 'Bei Jing'
        }
      ]
      $scope.quest = $scope.questions[0];
      $scope.selected = (index) => {
          $scope.users[index].checked = !$scope.users[index].checked;
      }

      $scope.d = {
        duration: new Date(),
        minDate: new Date(),
        altFormats: ['M!/d!/yyyy'],
        time: new Date(),
        ismeridian: true,
        open(){
          $scope.d.isOpen = true;
        }
      }

  }
}
