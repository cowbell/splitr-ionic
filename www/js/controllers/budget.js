angular.module('splitr')
    .controller('BudgetCtrl', function ($scope, $state, $ionicPopup, Transaction, budget) {
        $scope.budget = budget;
        $scope.member = {};

        $scope.addNewTransaction = function () {
            budget.newTransaction = new Transaction();
            $state.go('transaction.details', { budgetId: budget.id, transactionId: budget.newTransaction.id });
        }

        $scope.addNewMember = function () {
            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                templateUrl: 'views/member-popup.html',
                title: 'New member details',
                scope: $scope,
                buttons: [{
                    text: 'Cancel'
                }, {
                    text: '<b>Save</b>',
                    type: 'button-balanced',
                    onTap: function (e) {
                        if (!$scope.member.name) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        }
                    }
                }]
            });
            myPopup.then(function () {
                $scope.budget.members.push($scope.member);
                $scope.member = {};
            });
        };

        $scope.totalForMember = function (member) {
            var total = 0;

            budget.transactions.forEach(function (tran) {
                if (tran.payer === member) {
                    total += tran.amount;
                }
                if (tran.participants.indexOf(member) >= 0) {
                    total -= Math.round(tran.amount / tran.participants.length, 2);
                }
            });

            return total;
        }
    });
