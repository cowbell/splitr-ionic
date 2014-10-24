angular.module('splitr')
    .factory('firebase', function (FIREBASE_URL) {
        return new Firebase(FIREBASE_URL);
    });
