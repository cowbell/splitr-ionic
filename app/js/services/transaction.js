angular.module('splitr')
    .factory('Transaction', function () {
        var defaultObj,
            Trasaction;

        defaultObj = {
            id: UUIDjs.create().toString(),
            description: undefined,
            amount: 0,
            payer: undefined,
            participants: []
        };

        Transaction = function (data) {

            this.initialize = function (data) {
                angular.extend(this, defaultObj, data);
            };

            this.isParticipant = function (member) {
                return this.participants.filter(function (participant) {
                    return participant.id === member.id;
                }).length > 0;
            };

            this.initialize(data);
        };

        return Transaction;
    });