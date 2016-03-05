'use strict';

export default class ModalCtrl {
  constructor($scope, $uibModalInstance, Rest, data) {
    if(data.type == 'question'){
        $scope.data = data;
        $scope.getArr = (num) => {
            return new Array(num)
        }
        $scope.ok = () => {
          $uibModalInstance.close()
        }
    }else if(data.type == 'user'){
      data.callback = data.callback || function(){};
      var initd = {
        name: '',
        gender: '',
        email: '',
        password: '',
        age: '',
        job: '',
        valid: false,
        education: '',
        mobile_os: '',
        mobile_brand: '',
        pc_os: '',
        location: ''
      }, copy, fields;
      if(data.user){
          $scope.isUpdate = true;
          $scope.f =  angular.extend(initd, data.user);
          copy = angular.copy($scope.f);
      }else{
          initd.gender = 1;
          $scope.f = initd
      }

      var success = (d) => {
          alert('操作成功！');
          $uibModalInstance.close();
          if(!$scope.isUpdate){
              fields = $scope.f;
              fields.password = null;
              fields.question = [];
              fields.uid = d.uid;
              delete fields.password;
          }
          data.callback(fields)
      }
      var fail = () => {
          alert('操作失败！');
          $uibModalInstance.close();
          data.callback()
      }

      $scope.ok = () => {
        if($scope.isUpdate){
            fields = {};
            let isChange;
            for(var key in copy){
                if(copy[key] != $scope.f[key] && key != "question"){
                  isChange = true;
                  fields[key] = $scope.f[key];
                }
            }
            if(!isChange){
                $uibModalInstance.close()
                return;
            }
            let User = Rest.User();
            User.update({uid: $scope.f.uid}, fields).$promise.then(success, fail);
        }else{
            $scope.f.password = $scope.f.password.trim();
            if(!/^\w+@\w+?\.[a-zA-Z]{2,3}$/.test($scope.f.email) || $scope.f.password.length < 7){
                alert('邮箱或密码不合法！');
                return;
            }
            let User = Rest.User();
            let sender = angular.copy($scope.f);
            sender.valid = sender.valid == false?1:null;
            User.save($scope.f).$promise.then(success, fail);
        }
        // send f
        //$uibModalInstance.close()
      }
      $scope.cancel = () => {
        $uibModalInstance.close()
      }
    }
  }
}
