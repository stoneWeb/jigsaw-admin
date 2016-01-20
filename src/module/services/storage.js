'use strict';

export default class Storage {
  constructor(){
    this.storage = window.localStorage;
    this.namespace = 'jigsaw';
  }
  set(...args){
    let data = this.get(), last, _tmp = data;
    if(args.length == 1){
      data = args[0];
    }else if(args.length == 2){
      let key = args[0].split('.');
      last = key.pop();
      if(key.length){
        for(let item of key){
          if(!_tmp[item]){
            _tmp[item] = {};
          }
          _tmp = _tmp[item];
        }
      }
      _tmp[last] = args[1];
    }
    this.storage.setItem(this.namespace, JSON.stringify(data));
  }
  get(key){
    let _ret;
    try{
      _ret = JSON.parse(this.storage.getItem(this.namespace) || '{}');
    }catch(ex){
      _ret = {}
    }
    if(key != null){
      key = key.split('.');
      for(let item of key){
        _ret = _ret && _ret[item]?_ret[item]:null;
      }
      return _ret;
    }
    return _ret;
  }
  remove(key){
    let data = this.get(), last, _tmp = data;
    if(key){
      key = key.split('.');
      last = key.pop();
      if(key.length){
        for(let item of key){
          _tmp = _tmp && _tmp[item]?_tmp[item]:false;
        }
      }
      if(_tmp){
        _tmp[last] = null;
        delete _tmp[last];
      }
    }else{
      data = {};
    }
    this.set(data);
  }
}
