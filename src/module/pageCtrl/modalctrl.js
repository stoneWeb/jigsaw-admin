'use strict';

export default class ModalCtrl {
  constructor($scope, $uibModalInstance, data) {
    $scope.data = data;
    $scope.ok = () => {
      $uibModalInstance.close()
    }
  }
}
