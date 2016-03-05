'use strict';

export default class Rest {
    constructor($resource, $http, $rootScope, Cfg, Storage){
      var host = Cfg.API['host'];
      var tokenInterval,
          methods = {
              'update': 'PUT',
              'query' : 'GET',
              'get'   : 'GET',
              'save'  : 'POST',
              'delete': 'DELETE'
          }
      var creatResource = (api) => {
        var token = Storage.get('token');

        var header = {};
        ['query', 'get', 'save', 'update', 'delete'].forEach((action) => {
            header[action] = {
              method: methods[action],
              headers: {
                  'Authorization': 'Basic ' + btoa(token+':Lei')
              }
            }
        });

        var params = {
          'user'    : [host+Cfg.API['user']+'/:uid', {uid:"@id"}, header],
          'question': [host+Cfg.API['question']+'/:sid', {sid:"@id"}, header],
          'task'    : [host+Cfg.API['task']+'/:sid', {sid:"@id"}, header]
        }

        return $resource.apply(null, params[api.toLowerCase()]);
      }

      ['User', 'Question', 'Task'].forEach((model) => {
          this[model] = () => {
              return creatResource(model)
          }
      });

      this.getToken = (user="", pass="") => {
          return {'$promise': $http({
                        url: host+Cfg.API['token'],
                        headers: {
                            'Authorization': 'Basic ' + btoa(user+':'+pass)
                        }
                    })
                }
      }
      var refreshToken = () => {
          let token = Storage.get('token');
          $http({
              url: host+Cfg.API['token'],
              headers: {
                  'Authorization': 'Basic ' + btoa(token+':Lei')
              }
          }).then(
            (d) => {
                if(d.Success == 1){
                  Storage.set('token', d.token);
                  tokenInterval = setTimeout(refreshToken, d.duration*1000 - 10000);
                  cb && cb(d.user);
                  return;
                }
                $rootScope.$emit('refreshTokenError');
            },
            () => {
                $rootScope.$emit('refreshTokenError');
            }
          )
      }
      this.refreshToken = refreshToken;
    }
}
