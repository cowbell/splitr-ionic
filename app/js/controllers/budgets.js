angular.module('splitr')
    .controller('BudgetsCtrl', function ($scope, $state, Budget) {
    	var newBudget;

        $scope.addNewBudget = function () {
            newBudget = new Budget();
            Budget.add(newBudget);
            $state.go('main.budget.details', {
                budgetId: newBudget.id
            });
        };
    });
