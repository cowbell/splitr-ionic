angular.module('splitr')
    .controller('TransactionCtrl', function ($scope, $ionicPopup, $ionicModal, $state, $stateParams, transaction, budget) {
        var payerSelectPopup;
        $scope.transaction = transaction;
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
            $state.go('main.budget.transactions', {
                budgetId: $stateParams.budgetId
            });
        };

        $scope.isParticipant = function (member) {
            return $scope.transaction.participants.filter(function (part) {
                return part.id === member.id;
            }).length > 0;
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

        $scope.pickADate = function () {
            $scope.datePicker.show();
        };

        $scope.close = function () {

        };

        $scope.clear = function () {

        };
    });
