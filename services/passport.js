const passport = require('passport') //Importing passport
const GoogleStrategy = require('passport-google-oauth20').Strategy // Importing strategy
const keys = require('../config/keys')
const mongoose = require('mongoose');

const User = mongoose.model('users'); //model class, This will pull out user model

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
(accessToken,refreshToken,profile,done) =>{
    User.findOne({googleId: profile.id})
    .then((existingUser)=>{
        if(existingUser){
            // we already have a record with the given id
            done(null,existingUser);
        }
        else{
            new User ({ googleID:profile.id }).
            save() // This will take model instance and save it to database
            .then(user => done(null,user));
        }
    });
}
)); // Tells passport to use new GoogleStrategy to handle users it take two arguments 
