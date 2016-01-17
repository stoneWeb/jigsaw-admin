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
    return path === $location.path();
  }
})
.config(router);
