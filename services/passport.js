const passport = require("passport"); //Importing passport
const GoogleStrategy = require("passport-google-oauth20").Strategy; // Importing strategy
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users"); //model class, This will pull out user model

passport.serializeUser((user, done) => {
  //Here user is user model instance it was a mongoose model
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // we call done after successfully turing id into user,We will turn this id into user
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => console.log("Something happens" + err));
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });

      if (existingUser) {
        // we already have a record with the given id
        return done(null, existingUser);
      } 
        const user = await new User({ googleID: profile.id }).save() // This will take model instance and save it to database
        done(null,user);
      
    }
  )
); // Tells passport to use new GoogleStrategy to handle users it take two arguments
