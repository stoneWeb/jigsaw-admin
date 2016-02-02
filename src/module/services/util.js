'use strict';

export default class Util {
    constructor($uibModal){
      this.$uibModal = $uibModal;
    }
    openUserModal(data){
      return this.$uibModal.open({
              animation: true,
              template: require('../../tpl/adduser.html'),
              controller: 'ModalCtrl',
              size: 'sm',
              resolve: {
                data(){
                  return Object.assign({type: 'user'}, data || {});
                }
              }
            });
    }
    openQuestionModal(data){
      return this.$uibModal.open({
              animation: true,
              template: require('../../tpl/question_preview.html'),
              controller: 'ModalCtrl',
              size: 'sm',
              resolve: {
                data(){
                  return Object.assign({type: 'question'}, data || {});
                }
              }
            });
    }
}
