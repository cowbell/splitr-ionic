angular.module('splitr')
    .controller('TransactionCtrl', function ($scope, $ionicPopup, $ionicModal, $state, $stateParams, transaction, budget) {
        var payerSelectPopup;
        $scope.transaction = angular.copy(transaction);
        $scope.members = budget.members;

        $ionicModal.fromTemplateUrl(
            'views/datepicker.html',
            function (modal) {
                $scope.datePicker = modal;
            }, {
                scope: $scope,
                animation: 'slide-in-up'
            }
        );

        $scope.goBack = function () {
            goToTransactions();
        };

        $scope.isParticipant = function (member) {
            return findParticipant(member) !== undefined;
        };

        $scope.choosePayer = function () {
            // An elaborate, custom popup
            payerSelectPopup = $ionicPopup.show({
                templateUrl: 'views/payer-select-popup.html',
                title: 'Choose payer',
                scope: $scope
            });
        };

        $scope.selectPayer = function (member) {
            $scope.transaction.payer = member;
            payerSelectPopup.close();
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
