angular.module('splitr')
    .factory('Transaction', function () {
        var defaultObj = {
            id: UUIDjs.create().toString(),
            description: undefined,
            amount: 0,
            payer: undefined,
            participants: []
        };

        var Transaction = function (data) {

            this.initialize = function (data) {
                angular.extend(this, defaultObj, data);
            };

            this.initialize(data);
        };

        return Transaction;
    });
