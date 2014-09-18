// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('splitr', ['ionic','ui.gravatar'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
        url: "",
        abstract: true,
        templateUrl: "views/main.html",
        controller: 'MainCtrl',
        resolve: {
          budgets: function(Budget){
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
      url: '/budgets/:budgetId',
      views: {
        'main': {
          templateUrl: 'views/budget.html',
          controller: 'BudgetCtrl'
        }
      },
      resolve: {
        budget: function(Budget, $stateParams){
          return Budget.findById($stateParams.budgetId);
        }
      }
    });


  $urlRouterProvider.otherwise('/budgets');
});

