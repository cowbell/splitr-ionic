angular.module('splitr')
    .factory('Budget', function (fixtures) {
        var budgets,
            defaultObj,
            Budget;

        budgets = fixtures.budgets;

        defaultObj = {
            id: UUIDjs.create().toString(),
            name: 'New budget',
            members: [],
            transactions: []
        };

        Budget = function (data) {
            this.initialize = function (data) {
                angular.extend(this, defaultObj, data);
            };

            this.initialize(data);
        };

        Budget.getAll = function () {
            return budgets;
        };

        Budget.findById = function (id) {
            var filtered = budgets.filter(function (bud) {
                return bud.id === id;
            });
            if (filtered.length > 0) {
                return filtered[0];
            }
        };

        Budget.add = function (budget) {
            budgets.push(budget);
        };

        return Budget;
    });
