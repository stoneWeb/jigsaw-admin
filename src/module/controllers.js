import angular from 'angular';
import 'chart.js';
import ng_chart from 'angular-chart.js';

angular.module('App.controllers', [ng_chart.name])
  .controller('LoginCtrl', ($scope, $location) => {
      $scope.submit = () => {
        $location.path('dashboard');
      }
  })
  .controller('MenuCtrl', ($scope) => {

  })
  .controller('DashCtrl', ($scope) => {
      $scope.labels2 = ["January", "February", "March", "April", "May", "June", "July"];
      $scope.series = ['Series A', 'Series B'];
      $scope.data2 = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];

      $scope.labels1 = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
      $scope.data1 = [300, 500, 100];

      $scope.labels3 =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
      $scope.data3 = [
        [65, 59, 90, 81, 56, 55, 40],
        [28, 48, 40, 19, 96, 27, 100]
      ];
  })
  .controller('QuesCtrl', ($scope) => {

  })
  .controller('UsersCtrl', ($scope) => {

  })
  .controller('TasksCtrl', ($scope) => {

  });
