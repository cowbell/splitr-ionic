angular.module('splitr')
    .controller('TransactionsCtrl', function ($scope, $location, $state, budget) {
        var sortedTransacions = budget.transactions.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });

        $scope.transactionsGroupedByDay = sortedTransacions.groupBy(function (item) {
            return [item.date];
        });

        $scope.showDetailsTransactionId = 0;

        $scope.showDetails = function (transaction) {
            $state.go('transaction', {
                transactionId: transaction.id,
                budgetId: budget.id
            });
            //$location.path('/budget/'+budget.id+'/transactions/'+transaction.id);
            // if($scope.showDetailsTransactionId === transcation.id){
            // 	$scope.showDetailsTransactionId = 0;
            // }
            // else{
            // 	$scope.showDetailsTransactionId = transcation.id;
            // }
        };
    });
