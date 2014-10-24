angular.module('splitr')
    .controller('BudgetCtrl', function ($scope, $state, $ionicPopup, Transaction, budget) {
        $scope.budget = budget;
        $scope.member = {};

        $scope.addNewTransaction = function () {
            Transaction.newTransaction = new Transaction();
            $state.go('transaction', { budgetId: budget.id, transactionId: Transaction.newTransaction.id });
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
    });
