angular.module('splitr')
	.factory('fixtures', function(){
		var tomek = { id: newId(), name: 'Tomasz Subik', email: 'tsubik@gmail.com' };
		var kuba = { id: newId(), name: 'Kuba Kuźma', email: 'kuba@jah.pl' };
		var szymon = { id: newId(), name: 'Szymon Nowak', email: 'szimek@gmail.com'};
		var wojtek = { id: newId(), name: 'Wojtek Wnętrzak', email: 'wojtek@urizen.pl'};
		var mikro = { id: newId(), name: 'Mirek Boruta', email: 'mirek@mirobor.pl'};

		// var wojtek = { }
		// var mikro = { }

		var users = [tomek, kuba];

		var budgets = [
			{
				id: newId(),
				name: 'Office',
				currency: 'PLN',
				members: [
					tomek,
					kuba,
					szymon,
					wojtek,
					mikro
				],
				transactions: [
					{ id: newId(), date: '2014-09-15', time: '11:30', description: 'Kupno papieru', amount: 20, payer: tomek, participants: [tomek, kuba] },
					{ id: newId(), date: '2014-09-15', time: '13:13', description: 'Drukarka',  amount: 40, payer: kuba, participants: [tomek, kuba]},
					{ id: newId(), date: '2014-09-16', time: '14:11', description: 'Obiad', amount: 60, payer: wojtek, participants: [wojtek, tomek, szymon]},
					{ id: newId(), date: '2014-09-17', time: '14:11', description: 'Obiad', amount: 55, payer: tomek, participants: [tomek, wojtek, mikro]},
					{ id: newId(), date: '2014-09-18', time: '14:11', description: 'Klima', amount: 500, payer: kuba, participants: [tomek, kuba, wojtek, mikro, szymon]},
					{ id: newId(), date: '2014-09-19', time: '14:11', description: 'Klucze', amount: 24, payer: tomek, participants: [tomek, wojtek,kuba,szymon,mikro]},
					{ id: newId(), date: '2014-09-19', time: '14:11', description: 'Sprzątanie', amount: 50, payer: kuba, participants: [tomek, kuba, wojtek, mikro, szymon]},
					{ id: newId(), date: '2014-09-20', time: '14:11', description: 'Obiad', amount: 40, payer: szymon, participants: [tomek, wojtek]}
				]
			},
			{ id: newId(), name: 'Home', members: [], transactions: [] }
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

		function newId() {
			return UUIDjs.create().toString();
		}
	});