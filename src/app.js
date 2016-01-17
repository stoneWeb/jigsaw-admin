// import css
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-chart.js/dist/angular-chart.css';
import './styles/css.css';
import './styles/ionicons.min.css';

// import lib
import angular from 'angular';
import ui_router from 'angular-ui-router';
import r from './module/router';
import ui_bootstrap from 'angular-ui-bootstrap';

// import controllers
import './module/controllers';

let {
  router,
  routerCfg
} = r;

angular.module('app', [
  ui_router,
  ui_bootstrap,
  'App.controllers'
])
.run(($rootScope, $location, $sce) => {
  $rootScope.crumbs = () => {
    let path = $location.path();
    if(routerCfg[path]){
      let crmb = routerCfg[path].crumbs;
      let html = '';
      crmb.forEach((item)=>{
        html += '<li>'+ item +'</li>';
      });
      return $sce.trustAsHtml(html);
    }
    return ''
  };
  $rootScope.isActive = (path) => {
    return path === $location.path();
  }
})
.config(router);
