// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID' 		: '1195906013863719', // your App ID
        'clientSecret' 	: '1a4aa6c429dfd6210260e59dbe96d941', // your App Secret
        'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey' 		: 'anhDojdYavA62EFA6pX6hxg11',
        'consumerSecret' 	: 'YvHpvQdYIQ46XPSdkMjWSVC8VEE92XcYu5spsmxb7YqWWy83iM',
        'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID' 		: '639577958123-gfki96gufnh91vml5ltj4407gagjle70.apps.googleusercontent.com',
        'clientSecret' 	: 't9NxnRT_FKclVem17NrlhiS4',
        'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
    }

};