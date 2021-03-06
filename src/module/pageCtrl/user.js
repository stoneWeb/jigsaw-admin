'use strict';

let adduserTpl = require('../../tpl/adduser.html');
export default class UsersCtrl {
  constructor($scope, Util, Rest) {
    $scope.query = '';
    let User = Rest.User();
    User.query({})
      .$promise.then(
        (d) => {
            $scope.list = d.data;
        },
        () => {
           console.log('request user error!');
        }
      );
    $scope.ckAll = (e) => {
      for(let item of $scope.list){
        item.checked = e.target.checked
      }
    }

    $scope.sendPush = () => {
      let us = $scope.list.filter((item) => {
          return item.checked
      }).map((item) => {
          return item.uid
      });
      if(us.length){
          Util.openPush({
            user: us,
            callback(){

            }
          });
      }else{
        alert("请选择用户！")
      }
    }
    $scope.addUser = () => {
      Util.openUserModal({
        callback(data){
          $scope.list.unshift(data);
        }
      });
    }
    $scope.editUser = (index) => {
      Util.openUserModal({
        user: $scope.list[index],
        callback(data){
          $scope.list[index] = angular.extend($scope.list[index], data)
        }
      });
    }
    $scope.removeUser = (index) => {
        if(window.confirm('你确定删除此用户？')){
            var user = $scope.list[index];
            var User = Rest.User();
            User.delete({uid: user.uid}).$promise.then(() => {
              alert('删除成功！');
              $scope.list.splice(index, 1);
            }, () => { alert('删除失败！') })
        }
    }
  }
}
