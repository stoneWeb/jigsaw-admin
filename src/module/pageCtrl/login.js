'use strict';
export default class LoginCtrl {
  constructor($scope, $location) {
      $scope.submit = () => {
        $location.path('dashboard');
      }
  }
}
