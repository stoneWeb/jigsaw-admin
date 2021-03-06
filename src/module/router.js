let routerCfg = {
  '/dashboard': {
    state: 'admin.dashboard',
    crumbs: ['Dashboard'],
    url: 'dashboard',
    template: require('../tpl/dashboard.html'),
    controller: 'DashCtrl'
  },
  '/questions': {
    state: 'admin.questions',
    crumbs: ['Study'],
    url: 'questions',
    template: require('../tpl/questions.html'),
    controller: 'QuesCtrl'
  },
  '/questions/add': {
    crumbs: ['<a href="#/questions">Study</a>', 'Add'],
    state: 'admin.questions_add',
    url: 'questions/add',
    template: require('../tpl/questions.add.html'),
    controller: 'QuesAddCtrl'
  },
  '/questions/edit': {
    crumbs: ['<a href="#/questions">Study</a>', 'Edit'],
    state: 'admin.questions_edit',
    url: 'questions/edit/:id',
    template: require('../tpl/questions.edit.html'),
    controller: 'QuesEditCtrl'
  },
  '/users': {
    crumbs: ['Users'],
    state: 'admin.users',
    url: 'users',
    template: require('../tpl/users.html'),
    controller: 'UsersCtrl'
  },
  '/tasks': {
    crumbs: ['Tasks'],
    state: 'admin.tasks',
    url: 'tasks',
    template: require('../tpl/tasks.html'),
    controller: 'TasksCtrl'
  },
  '/tasks/add': {
    crumbs: ['<a href="#/tasks">Tasks</a>', 'Add'],
    state: 'admin.tasks_add',
    url: 'tasks/add',
    template: require('../tpl/tasks.add.html'),
    controller: 'TasksAddCtrl'
  },
  '/tasks/edit': {
    crumbs: ['<a href="#/tasks">Tasks</a>', 'Edit'],
    state: 'admin.tasks_edit',
    url: 'tasks/edit/:id',
    template: require('../tpl/tasks.edit.html'),
    controller: 'TasksEditCtrl'
  },
  '/results': {
    crumbs: ['Results'],
    state: 'admin.results',
    url: 'results/:id',
    template: require('../tpl/results.html'),
    controller: 'ResultsCtrl'
  }
}

let router = ($urlRouterProvider, $stateProvider, $locationProvider) => {
  //$locationProvider.html5Mode(true);
  let provider = $stateProvider
    .state('login', {
      url: '/login',
      template: require('../tpl/login.html'),
      controller: 'LoginCtrl'
    })
    .state('admin', {
      url: '/',
      template: require('../tpl/menu.html'),
      controller: 'MenuCtrl'
    });

  Object.keys(routerCfg).forEach((key) => {
    let o = routerCfg[key];
    provider.state(o.state, {
      url: o.url,
      views: {
        'menuContent': {
          template: o.template,
          controller: o.controller
        }
      }
    });
  })
  $urlRouterProvider.otherwise('/login');
}
router.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

export default {router, routerCfg}
