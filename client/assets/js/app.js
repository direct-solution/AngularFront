(function () {
'use strict';
        angular.module('application', [
                'ui.router',
                'ngAnimate',
                //foundation
                'foundation',
//    'foundation.dynamicRouting',
                'foundation.dynamicRouting.animations',
                'ncy-angular-breadcrumb'
        ])
        .config(config)
        .run(run)
        ;
        config.$inject = ['$stateProvider', '$urlRouterProvider'];
        function config($stateProvider, $urlRouterProvider) {

        $stateProvider
                .state('home', {
                url: '/',
                        templateUrl: 'templates/home.html',
                        animation: {
                        enter: 'slideInRight',
                                leave: 'slideOutRight',
                        },
//              controller: 'YourController',
                        resolve: {
                        },
                ncyBreadcrumb: {
                label: 'Home page'
                }
                })
                .state('login', {
                url: 'login/',
                        parent: 'account',
                        templateUrl: 'templates/login.html',
                        animation: {
                        enter: 'slideInRight',
                                leave: 'slideOutRight',
                        },
//              controller: 'YourController',
                        resolve: {
                        },
                ncyBreadcrumb: {
                label: 'Login'
                }
                })
                .state('account', {
                parent: 'home',
                        url: 'account/',
                        templateUrl: 'templates/account.html',
                        animation: {
                        enter: 'slideInRight',
                                leave: 'slideOutRight',
                        },
//              controller: 'YourController',
                        resolve: {
                        },
                ncyBreadcrumb: {
                label: 'Your Account'
                }
                })
                .state('forgotten-password', {
                url: 'forgotten-password/',
                        parent: 'account',
                        templateUrl: 'templates/forgot-password.html',
                        animation: {
                        enter: 'slideInRight',
                                leave: 'slideOutRight',
                        },
//              controller: 'YourController',
                        resolve: {
                        },
                ncyBreadcrumb: {
                label: 'Forgotten Password'
                }
                })

                .state('settings', {
                parent: 'home',
                        url: 'settings/',
                        templateUrl: 'templates/settings.html',
                        animation: {
                        enter: 'slideInRight',
                                leave: 'slideOutRight',
                        },
//              controller: 'YourController',
                        resolve: {
                        },
                ncyBreadcrumb: {
                label: 'Settings'
                }
                })
                .state('auditcp', {
                parent: 'home',
                        url: 'control-panel/',
                        templateUrl: 'templates/audit/index.html',
                        animation: {
                        enter: 'slideInRight',
                                leave: 'slideOutRight',
                        },
//              controller: 'YourController',
                        resolve: {
                        },
                ncyBreadcrumb: {
                label: 'Control Panel'
                }
                })
                .state('audit-view', {
                url: 'audit-view/',
                        parent: 'auditcp',
                        templateUrl: 'templates/audit/view.html',
                        animation: {
                        enter: 'slideInRight',
                                leave: 'slideOutRight',
                        },
//              controller: 'YourController',
                        resolve: {
                        },
                ncyBreadcrumb: {
                label: 'View Audit'
                }
                })
                .state('audit-delete', {
                url: 'audit-delete/',
                        parent: 'audit-view',
                        templateUrl: 'templates/audit/delete.html',
                        animation: {
                        enter: 'slideInRight',
                                leave: 'slideOutRight',
                        },
//              controller: 'YourController',
                        resolve: {
                        },
                ncyBreadcrumb: {
                label: 'Delete Audit'
                }
                })
                .state('audit-update', {
                url: 'audit-update/',
                        parent: 'audit-view',
                        templateUrl: 'templates/audit/update.html',
                        animation: {
                        enter: 'slideInRight',
                                leave: 'slideOutRight',
                        },
//              controller: 'YourController',
                        resolve: {
                        },
                ncyBreadcrumb: {
                label: 'Update Audit'
                }
                })
                .state('audit-new', {
                url: 'audit-new/',
                        parent: 'auditcp',
                        templateUrl: 'templates/audit/new.html',
                        animation: {
                        enter: 'slideInRight',
                                leave: 'slideOutRight',
                        },
//              controller: 'YourController',
                        resolve: {
                        },
                ncyBreadcrumb: {
                label: 'Create Audit'
                }
                });
//        $stateProvider.otherwise('/');
//
//    $locationProvider.html5Mode({
//      enabled:false,
//      requireBase: false
//    });
//    
//
//    $locationProvider.hashPrefix('!');
        }

function run() {
FastClick.attach(document.body);
}

})();
