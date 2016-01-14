let router = ($urlRouterProvider, $stateProvider, $locationProvider) => {
  //$locationProvider.html5Mode(true);
  $stateProvider
    .state('login', {
      url: '/login',
      template: require('../tpl/login.html'),
      controller: 'LoginCtrl'
    })
    .state('admin', {
      url: '/',
      template: require('../tpl/menu.html'),
      controller: 'MenuCtrl'
    })
    .state('admin.dashboard', {
      url: 'dashboard',
      views: {
        'menuContent': {
          template: require('../tpl/dashboard.html'),
          controller: 'DashCtrl'
        }
      }
    })
    .state('admin.questions', {
      url: 'questions',
      views: {
        'menuContent': {
          template: require('../tpl/questions.html'),
          controller: 'QuesCtrl'
        }
      }
    })
    .state('admin.users', {
      url: 'users',
      views: {
        'menuContent': {
          template: require('../tpl/users.html'),
          controller: 'UsersCtrl'
        }
      }
    })
    .state('admin.tasks', {
      url: 'tasks',
      views: {
        'menuContent': {
          template: require('../tpl/tasks.html'),
          controller: 'TasksCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/dashboard');
}
router.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

export default router
