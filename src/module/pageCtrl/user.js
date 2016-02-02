'use strict';

let adduserTpl = require('../../tpl/adduser.html');
export default class UsersCtrl {
  constructor($scope, Util) {
    $scope.list = [
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
    ];
    $scope.ckAll = (e) => {
      for(let item of $scope.list){
        item.checked = e.target.checked
      }
    }
    $scope.addUser = () => {
      var modalInstance = Util.openUserModal();
    }
  }
}
