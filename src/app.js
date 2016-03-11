// import css
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-chart.js/dist/angular-chart.css';
import './styles/css.css';
import './styles/ionicons.min.css';

// import lib
import angular from 'angular';
import ui_router from 'angular-ui-router';
import ng_resource from 'angular-resource';
import r from './module/router';
import ui_bootstrap from 'angular-ui-bootstrap';

// import controllers
import './module/controllers';

// import directives
import './module/directives';

// import service
import './module/services';

let {
  router,
  routerCfg
} = r;

let app = angular.module('app', [
  ui_router,
  ui_bootstrap,
  ng_resource,
  'App.services',
  'App.directives',
  'App.controllers'
])
.run(($rootScope, $location, $sce, Storage, Rest) => {
  $rootScope.crumbs = () => {
    let path = $location.path().replace(/\/\d+$/, '');
    if(routerCfg[path]){
        let crmbs = routerCfg[path].crumbs;
        let html = [];
        for(let item of crmbs){
          html.push(`<li>${item}</li>`);
        }
        return $sce.trustAsHtml(html.join(''));
    }
    return ''
  };
  $rootScope.isActive = (path) => {
    return path === $location.path().split('/').slice(0, 2).join('/');
  }
  $rootScope.$on('refreshTokenError', () => {
      console.log('token Expire！');
      Storage.remove('token');
      Rest.user = null;
      $location.path('/login');
  })
  // 检测Token
  Rest.refreshToken((user) => {
      //console.log(user);
  });
})
.config(router);
