angular.module('splitr')
    .controller('TransactionCtrl', function ($scope, $state, $stateParams, transaction, budget) {
        $scope.transaction = transaction;
        $scope.members = budget.members;

        $scope.goBack = function () {
            $state.go('main.budget.transactions', {
                budgetId: $stateParams.budgetId
            });
        };

        $scope.isParticipant = function (member) {
        	return $scope.transaction.participants.filter(function (part) {
        		return part.id === member.id;
        	}).length > 0;
        };
    });
