'use strict';

export function routeConfig($urlRouterProvider, $locationProvider, $mdThemingProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('blue-grey');
}
