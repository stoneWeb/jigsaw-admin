'use strict';
export default class LoginCtrl {
  constructor($scope, $rootScope, $location, Storage, Rest) {
      if($rootScope.user){
          return $location.path('/dashboard')
      }
      $scope.submit = () => {
          if($scope.email.trim() == '' || $scope.password == ''){
              return
          }
          Rest.getToken($scope.email.trim(), $scope.password)
            .$promise.then(
              (d) => {
                  $rootScope.user = d.user;
                  Storage.set('token', d.token);
                  setTimeout(Rest.refreshToken, d.duration*1000 - 10000);
                  $location.path('/dashboard');
              },
              () => {
                  console.log('login error');
              }
            )
      }
  }
}
