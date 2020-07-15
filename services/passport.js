const passport = require('passport') //Importing passport
const GoogleStrategy = require('passport-google-oauth20').Strategy // Importing strategy
const keys = require('../config/keys')
const mongoose = require('mongoose');

const User = mongoose.model('users'); //model class, This will pull out user model

passport.serializeUser((user,done)=>{ //Here user is user model instance it was a mongoose model
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{ // we call done after successfully turing id into user,We will turn this id into user
    User.findById(id)
    .then(user =>{
        done(null,user);
    });
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
