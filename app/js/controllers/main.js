angular.module('splitr')
    .controller('MainCtrl', function ($scope, budgets) {
        $scope.budgets = budgets;
    });
