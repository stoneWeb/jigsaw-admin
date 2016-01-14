// import css
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-chart.js/dist/angular-chart.css';
import './styles/css.css';
import './styles/ionicons.min.css';

// import lib
import angular from 'angular';
import ui_router from 'angular-ui-router';
import router from './module/router';
import ui_bootstrap from 'angular-ui-bootstrap';

// import controllers
import './module/controllers';

angular.module('app', [
  ui_router,
  ui_bootstrap,
  'App.controllers'
])
.run(($rootScope, $location) => {
  $rootScope.isActive = (path) => {
    return path === $location.path();
  }
})
.config(router)
