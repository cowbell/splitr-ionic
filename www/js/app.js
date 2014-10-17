// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('splitr', [
        'ionic',
        'angular-datepicker',
        'ui.gravatar'
    ])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('main', {
            url: '',
            abstract: true,
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            resolve: {
                budgets: function (Budget) {
                    return Budget.getAll();
                }
            }
        })
        .state('main.budgets', {
            url: '/budgets',
            views: {
                'main': {
                    templateUrl: 'views/budgets.html',
                    controller: 'BudgetsCtrl'
                }
            }
        })
        .state('main.budget', {
            abstract: true,
            url: '/budgets/:budgetId',
            views: {
                'main': {
                    templateUrl: 'views/budget.html',
                    controller: 'BudgetCtrl'
                }
            },
            resolve: {
                budget: function (Budget, $stateParams) {
                    return Budget.findById($stateParams.budgetId);
                }
            }
        })
        .state('main.budget.details', {
            url: '',
            views: {
                'detailsTab': {
                    templateUrl: 'views/budget-details.html'
                }
            }
        })
        .state('main.budget.transactions', {
            url: '/transactions',
            views: {
                'transactionsTab': {
                    templateUrl: 'views/transactions.html',
                    controller: 'TransactionsCtrl'
                }
            }
        })
        .state('transaction', {
            abstract: true,
            url: '/budgets/:budgetId/transactions/:transactionId',
            templateUrl: 'views/transaction.html',
            controller: 'TransactionCtrl',
            resolve: {
                transaction: function ($stateParams, Budget) {
                    var budget = Budget.findById($stateParams.budgetId);
                    if (budget.newTransaction && budget.newTransaction.id === $stateParams.transactionId) {
                        return budget.newTransaction;
                    }
                    var transaction = budget.transactions.filter(function (t) {
                        return t.id === $stateParams.transactionId;
                    })[0];
                    return transaction;
                },
                budget: function ($stateParams, Budget) {
                    return Budget.findById($stateParams.budgetId);
                }
            }
        })
        .state('transaction.details', {
            url: '',
            views: {
                'detailsTab': {
                    templateUrl: 'views/transaction-details.html'
                }
            }
        })
        .state('transaction.participants', {
            url: '/participants',
            views: {
                'participantsTab': {
                    templateUrl: 'views/transaction-participants.html'
                }
            }
        })
        .state('main.budget.members', {
            url: '/members',
            views: {
                'membersTab': {
                    templateUrl: 'views/members.html'
                }
            }
        });

    $urlRouterProvider.otherwise('/budgets');
});
