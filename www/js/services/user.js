angular.module('splitr.services')
    .factory('User', function() {
        var users = [{
            id: 1,
            name: 'Tomasz Subik'
        }, {
            id: 2,
            name: 'Kuba Kuźma'
        }];

        return {
            findByBudgetId: function(budgetId) {

            },
            findById: function(id) {
                var finded = users.filter(function(user) {
                    return user.id === id;
                });
                if (finded.length > 0) {
                    return finded[0];
                }
            },
            getAll: function() {
                return users;
            }
        };
    });