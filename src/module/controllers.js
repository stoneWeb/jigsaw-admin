'use strict';
import 'chart.js';
import ng_chart from 'angular-chart.js';

import DashCtrl from './pageCtrl/dash';
import LoginCtrl from './pageCtrl/login';
import MenuCtrl from './pageCtrl/menu';
import QuesCtrl from './pageCtrl/question';
import QuesAddCtrl from './pageCtrl/question.add';
import QuesEditCtrl from './pageCtrl/question.edit';
import TasksCtrl from './pageCtrl/task';
import TasksAddCtrl from './pageCtrl/task.add';
import TasksEditCtrl from './pageCtrl/task.edit';
import UsersCtrl from './pageCtrl/user';
import ModalCtrl from './pageCtrl/modalctrl';

angular.module('App.controllers', [ng_chart.name])
.controller('ModalCtrl', ModalCtrl)
.controller('MenuCtrl', MenuCtrl)
.controller('LoginCtrl', LoginCtrl)
.controller('UsersCtrl', UsersCtrl)
.controller('QuesCtrl', QuesCtrl)
.controller('QuesAddCtrl', QuesAddCtrl)
.controller('QuesEditCtrl', QuesEditCtrl)
.controller('TasksCtrl', TasksCtrl)
.controller('TasksAddCtrl', TasksAddCtrl)
.controller('TasksEditCtrl', TasksEditCtrl)
.controller('MenuCtrl', MenuCtrl)
.controller('DashCtrl', DashCtrl);
