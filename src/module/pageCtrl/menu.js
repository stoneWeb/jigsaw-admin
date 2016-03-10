'use strict';
export default class MenuCtrl {
  constructor($scope, $location, Storage, Rest) {
    if(!Storage.get('token')){
        return $location.path('/login')
    }
    $scope.logout = () => {
        Storage.remove('token');
        Rest.user = null;
        $location.path('/login');
    }
  }
}
