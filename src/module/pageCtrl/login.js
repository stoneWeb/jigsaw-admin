'use strict';
export default class LoginCtrl {
  constructor($scope, $location, Storage, Rest) {
      if(Rest.user){
          return $location.path('/dashboard')
      }
      $scope.submit = () => {
          if($scope.email.trim() == '' || $scope.password == ''){
              return
          }
          Rest.getToken($scope.email.trim(), $scope.password)
            .$promise.then(
              (d) => {
                  d = d.data;
                  if(d.user.uid != 1){
                      alert('您不是管理员！');
                      return;
                  }
                  Rest.user = d.user;
                  Storage.set('token', d.token);
                  setTimeout(Rest.refreshToken, d.duration*1000 - 10000);
                  $location.path('/dashboard');
              },
              () => {
                  alert('登陆失败！');
                  console.log('login error');
              }
            )
      }
  }
}
