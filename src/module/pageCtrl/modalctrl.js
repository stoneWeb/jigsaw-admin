'use strict';

export default class ModalCtrl {
  constructor($scope, $uibModalInstance, Rest, data, Cfg) {
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
      $scope.fms = Cfg.setinfo;
      var initd = {}, copy, fields;
      Object.keys(Cfg.setinfo).forEach((item) => {
          if(Cfg.setinfo[item].type == "radio"){
              initd[item] = Cfg.setinfo[item].data[0];
          }else{
              initd[item] = "";
          }
      });

      if(data.user){
          $scope.isUpdate = true;
          $scope.f =  angular.extend(initd, data.user);
          copy = angular.copy($scope.f);
      }else{
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
        var email = document.querySelector("#addu_email").value;
        $scope.f.email = email;
        $scope.f.valid = true;
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
    }else if(data.type == "push"){
      $scope.f = {
          message: "",
          badge: 1
      }
      $scope.ok = () => {
        var msg = $scope.f.message.trim();
        if(!msg){
            alert("请填写要发送的消息！");
            return
        }
        Rest.sendNotification({
          uid: data.user,
          alert: msg,
          badge: $scope.f.badge,
          custom: {}
        }).$promise.then(
              (d) => {
                  alert("发送成功！");
                  $uibModalInstance.close()
              },
              (d) => {
                  alert("发送失败！");
                  $uibModalInstance.close()
              }
          )

      }
      $scope.cancel = () => {
        $uibModalInstance.close()
      }
    }
  }
}
