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

  }
}
