angular.module('splitr')
	.factory('fixtures', function(){
		var tomek = { id: 1, name: 'Tomasz Subik', email: 'tsubik@gmail.com' };
		var kuba = { id: 2, name: 'Kuba Kuźma', email: 'kuba@jah.pl' };
		var szymon = { id: 3, name: 'Szymon Nowak', email: ''};
		// var wojtek = { }
		// var mikro = { }

		var users = [tomek, kuba];

		var budgets = [
			{ 
				id: 1, 
				name: 'Office', 
				currency: 'PLN',
				members: [ 
					extend(tomek, { total: -150 }),
					extend(kuba, { total: 150 })
				],
				transactions: [
					{ id: 1, date: '2014-09-15', time: '11:30', description: 'Kupno papieru', amount: -20, payer: tomek, participants: [tomek, kuba] },
					{ id: 2, date: '2014-09-15', time: '13:13', description: 'Drukarka',  amount: -40, payer: kuba, participants: [tomek, kuba]},
					{ id: 3, date: '2014-09-16', time: '14:11', description: 'Obiad', amount: -40, payer: kuba, participants: [tomek, kuba]}
				],
				currentUserTotal: -250 
			},
			{ id: 2, name: 'Home', members: [], transactions: [] }
		];

		return {
			users: users,
			budgets: budgets
		};

		function extend(src, using){
			var newObj = angular.copy(src);
			angular.extend(newObj, using);
			return newObj;
		}
	})