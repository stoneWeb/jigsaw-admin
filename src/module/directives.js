'use strict';
import textInput from './directives/textInput';
import radio from './directives/radio';
import multi from './directives/multi';
import image from './directives/image';

angular.module('App.directives', [])
  .directive('textinput', textInput)
  .directive('radio', radio)
  .directive('multi', multi)
  .directive('images', image);
