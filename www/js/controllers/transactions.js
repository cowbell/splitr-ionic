angular.module('splitr')
	.controller('TransactionsCtrl', function($scope, budget){
		var sortedTransacions = budget.transactions.sort(function(a,b){
		  return new Date(b.date) - new Date(a.date);
		});

		$scope.transactionsGroupedByDay =  groupBy(sortedTransacions, function(item){
			return [item.date];
		});
		
		$scope.showDetailsTransactionId = 0;

		$scope.showDetails = function(transcation){
			if($scope.showDetailsTransactionId === transcation.id){
				$scope.showDetailsTransactionId = 0;
			}
			else{
				$scope.showDetailsTransactionId = transcation.id;
			}
		}

		function groupBy( array , f )
		{
		  var groups = {};
		  array.forEach( function( o )
		  {
		    var group = JSON.stringify( f(o) );
		    groups[group] = groups[group] || [];
		    groups[group].push( o );  
		  });
		  return Object.keys(groups).map( function( group )
		  {
		    return groups[group]; 
		  })
		}
	})