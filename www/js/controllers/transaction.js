angular.module('splitr')
	.controller('TransactionCtrl', function($scope, $ionicNavBarDelegate, transaction){
		$scope.transaction = transaction;

		$scope.goBack = function() {
            $ionicNavBarDelegate.back();
        };
	})