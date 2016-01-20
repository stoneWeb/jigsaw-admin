'use strict';
import Storage from './services/storage';
import Config from './services/config';

angular.module('App.services', [])
  .service('Storage', Storage)
  .service('Cfg', Config);
