angular.module('splitr')
	.controller('TransactionCtrl', function($scope, $state, $stateParams, transaction){
		$scope.transaction = transaction;

		$scope.goBack = function() {
			$state.go('main.budget.transactions', { budgetId: $stateParams.budgetId });
        };
	});