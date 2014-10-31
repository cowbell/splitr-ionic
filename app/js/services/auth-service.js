angular.module('splitr')
    .factory('AuthService', function ($log, firebase) {
        return {
            currentUser: null,
            signIn: function (user) {
                var self = this;
                firebase.authWith(user, function (error, user) {
                    if (error) {
                        $log.log(error);
                    }
                    if (user) {
                        $log.log(user);
                        self.currentUser = user;
                    }
                });
            },
            signOut: function () {

            }
        };
    });
