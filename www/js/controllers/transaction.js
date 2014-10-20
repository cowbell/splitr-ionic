angular.module('splitr')
    .controller('TransactionCtrl', function ($scope, $ionicModal, $state, $stateParams, transactionData, Budget, Transaction) {
        var payerSelectModal;
        var transaction = transactionData.transaction;
        var budget = transactionData.budget;

        $scope.transaction = angular.copy(transaction);
        $scope.members = budget.members;

        $ionicModal.fromTemplateUrl(
            'views/payer-select-popup.html',
            function (modal) {
                $scope.payerSelectModal = modal;
            }, {
                scope: $scope,
                animation: 'slide-in-up'
            }
        );

        $scope.goBack = function () {
            goToTransactions();
        };

        $scope.choosePayer = function () {
            // An elaborate, custom popup
            $scope.payerSelectModal.show()
        };

        $scope.selectPayer = function (member) {
            $scope.transaction.payer = member;
            $scope.payerSelectModal.hide();
        };

        $scope.changeParticipation = function (member) {
            var participant, index;
            participant = findParticipant(member);
            if (participant) {
                index = $scope.transaction.participants.indexOf(participant);
                $scope.transaction.participants.splice(index, 1);
            } else {
                $scope.transaction.participants.push(member);
            }
        };

        $scope.saveChanges = function () {
            angular.extend(transaction, $scope.transaction);
            //angular.extend(transaction, $scope.transaction);
            if (Transaction.newTransaction && Transaction.newTransaction.id === transaction.id) {
                budget.transaction.push(transaction);
                delete Transaction.newTransaction;
            }
            Budget.update(budget);
            goToTransactions();
        };

        function goToTransactions() {
            $state.go('main.budget.transactions', {
                budgetId: $stateParams.budgetId
            });
        }

        function findParticipant(member) {
            var participants;
            participants = $scope.transaction.participants.filter(function (part) {
                return part.id === member.id;
            });
            if (participants.length > 0) {
                return participants[0];
            }
            return undefined;
        }
    });
