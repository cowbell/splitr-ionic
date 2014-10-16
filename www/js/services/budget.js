angular.module('splitr')
    .factory('Budget', function (fixtures) {
        var budgets = fixtures.budgets;

        return {
            getAll: getAll,
            findById: findById
        };

        function getAll() {
            return budgets;
        }

        function findById(id) {
            var filtered = budgets.filter(function (bud) {
                return bud.id === id;
            });
            if (filtered.length > 0) {
                return filtered[0];
            }
        }
    });
