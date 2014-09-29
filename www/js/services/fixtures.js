angular.module('splitr')
	.factory('fixtures', function(){
		var tomek = { id: 1, name: 'Tomasz Subik', email: 'tsubik@gmail.com' };
		var kuba = { id: 2, name: 'Kuba Kuźma', email: 'kuba@jah.pl' };
		var szymon = { id: 3, name: 'Szymon Nowak', email: 'szimek@gmail.com'};
		var wojtek = { id: 4, name: 'Wojtek Wnętrzak', email: 'wojtek@urizen.pl'};
		var mikro = { id: 5, name: 'Mirek Boruta', email: 'mirek@mirobor.pl'};

		// var wojtek = { }
		// var mikro = { }

		var users = [tomek, kuba];

		var budgets = [
			{ 
				id: 1, 
				name: 'Office', 
				currency: 'PLN',
				members: [ 
					extend(tomek, { total: -120 }),
					extend(kuba, { total: 550 }),
					extend(szymon, { total: -50 }),
					extend(wojtek, { total: -100}),
					extend(mikro, { total: -40 })
				],
				transactions: [
					{ id: 1, date: '2014-09-15', time: '11:30', description: 'Kupno papieru', amount: -20, payer: tomek, participants: [tomek, kuba] },
					{ id: 2, date: '2014-09-15', time: '13:13', description: 'Drukarka',  amount: -40, payer: kuba, participants: [tomek, kuba]},
					{ id: 3, date: '2014-09-16', time: '14:11', description: 'Obiad', amount: -60, payer: wojtek, participants: [wojtek, tomek, szymon]},
					{ id: 4, date: '2014-09-17', time: '14:11', description: 'Obiad', amount: -55, payer: tomek, participants: [tomek, wojtek, mikro]},
					{ id: 5, date: '2014-09-18', time: '14:11', description: 'Klima', amount: -500, payer: kuba, participants: [tomek, kuba, wojtek, mikro, szymon]},
					{ id: 6, date: '2014-09-19', time: '14:11', description: 'Klucze', amount: -24, payer: tomek, participants: [tomek, wojtek,kuba,szymon,mikro]},
					{ id: 7, date: '2014-09-19', time: '14:11', description: 'Sprzątanie', amount: -50, payer: kuba, participants: [tomek, kuba, wojtek, mikro, szymon]},
					{ id: 8, date: '2014-09-20', time: '14:11', description: 'Obiad', amount: -40, payer: szymon, participants: [tomek, wojtek]}
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