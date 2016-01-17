'use strict';
import 'chart.js';
import ng_chart from 'angular-chart.js';

import DashCtrl from './pageCtrl/dash';
import LoginCtrl from './pageCtrl/login';
import MenuCtrl from './pageCtrl/menu';
import QuesCtrl from './pageCtrl/question';
import QuesAddCtrl from './pageCtrl/question.add';
import TasksCtrl from './pageCtrl/task';
import UsersCtrl from './pageCtrl/user';

angular.module('App.controllers', [ng_chart.name])
.controller('MenuCtrl', MenuCtrl)
.controller('LoginCtrl', LoginCtrl)
.controller('UsersCtrl', UsersCtrl)
.controller('QuesCtrl', QuesCtrl)
.controller('QuesAddCtrl', QuesAddCtrl)
.controller('TasksCtrl', TasksCtrl)
.controller('MenuCtrl', MenuCtrl)
.controller('DashCtrl', DashCtrl);
