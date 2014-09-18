angular.module('splitr')
	.controller('BudgetCtrl', function($scope, budget){
		$scope.budget = budget;
		var sortedTransacions = budget.transactions.sort(function(a,b){
		  return new Date(b.date) - new Date(a.date);
		});

		$scope.transactionsGroupedByDay =  groupBy(sortedTransacions, function(item){
			return [item.date];
		});
		
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
	});

