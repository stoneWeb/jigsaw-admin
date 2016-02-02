'use strict';

export default class ModalCtrl {
  constructor($scope, $uibModalInstance, data) {
    if(data.type == 'question'){
        $scope.data = data;
        $scope.getArr = (num) => {
            return new Array(num)
        }
        $scope.ok = () => {
          $uibModalInstance.close()
        }
    }else if(data.type == 'user'){
      $scope.f = {
        name: '',
        gender: 'male',
        email: '',
        age: '',
        job: '',
        mobileos: '',
        mobilebd: '',
        pcos: '',
        location: ''
      }
      $scope.ok = () => {
        console.log($scope.f);
        // send f
        //$uibModalInstance.close()
      }
      $scope.cancel = () => {
        $uibModalInstance.close()
      }
    }

  }
}
