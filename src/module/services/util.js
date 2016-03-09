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
    formatDate(date){
        return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
    }
    checkEmptyObject(obj){
        if(typeof obj != 'object')
            return false
        for(var key in obj)
            return true
        return false
    }
}
