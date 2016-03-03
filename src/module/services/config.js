'use strict';

export default class Congfig {
  constructor(){
    this.host = 'http://localhost:8080';

    this.components = {
      "textInput": {
        type: 'textInput',
        title: ''
      },
      "radio": {
        type: 'radio',
        title: '',
        options: ['']
      },
      "multi": {
        type: 'multi',
        title: '',
        options: ['']
      },
      "image": {
        type: 'image',
        title: '',
        length: 1
      }
    };
    this.API = {
      'host'    : 'http://localhost:8888',
      'token'   : '/api/v1/token',
      'user'    : '/api/v1/users',
      'question': '/api/v1/questions',
      'task'    : '/api/v1/tasks'
    }
  }
}
