'use strict';
import Storage from './services/storage';
import Config from './services/config';
import Util from './services/util';
import Rest from './services/rest';

angular.module('App.services', [])
  .service('Storage', Storage)
  .service('Cfg', Config)
  .service('Util', Util)
  .service('Rest', Rest);
