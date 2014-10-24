angular.module('splitr')
    .factory('Budget', function (fixtures, $localStorage, Transaction) {

        var defaultObj = {
            id: UUIDjs.create().toString(),
            name: 'New budget',
            members: [],
            transactions: []
        };

        $localStorage.$default({
            budgets: fixtures.budgets
        });

        var Budget = function (data) {

            this.initialize = function (data) {
                angular.extend(this, defaultObj, data);
                this.transactions = this.transactions.map(function (tran) {
                    return new Transaction(tran);
                });
            };

            this.totalForMember = function (member) {
                var total = 0;

                this.transactions.forEach(function (tran) {
                    if (tran.payer.id === member.id) {
                        total += tran.amount;
                    }

                    if (tran.isParticipant(member)) {
                        total -= Math.round(tran.amount / tran.participants.length, 2);
                    }
                });

                return total;
            };

            this.initialize(data);
        };

        Budget.getAll = function () {
            return $localStorage.budgets.map(function (b) {
                return new Budget(b);
            });
        };

        Budget.findById = function (id) {
            var filtered = $localStorage.budgets.filter(function (bud) {
                return bud.id === id;
            });
            if (filtered.length > 0) {
                return new Budget(filtered[0]);
            }
        };

        Budget.add = function (budget) {
            $localStorage.budgets.push(budget);
        };

        Budget.update = function (budget) {
            var budgets = $localStorage.budgets;
            var oldObj = budgets.filter(function (bud) {
                return bud.id === budget.id;
            });

            if (oldObj.length > 0) {
                budgets.splice(budgets.indexOf(oldObj[0]), 1, budget);
            }
            $localStorage.budgets = budgets;
        };

        return Budget;
    });
