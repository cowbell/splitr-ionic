angular.module('splitr')
	.directive('amount', function(){
		return {
			restrict: "E",
			replace: true,
    		template: '<span class="badge {{badgeType}}">{{value}}</span>',
			link: function(scope, element, attr){
				if(attr.value){
					var f = parseFloat(attr.value);
					if(f < 0){
						scope.badgeType = 'badge-assertive';
					}
					else{
						scope.badgeType = 'badge-balanced';
					}
					scope.value = attr.value;
				}
				if(attr.currency){
					scope.value += ' ' + attr.currency;
				}
			}
		}
	})