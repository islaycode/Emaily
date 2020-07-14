const passport = require('passport')

module.exports = app => {
//Whenever user comes to /auth/google we will forward them to oath flow managed by passport
app.get('/auth/google',
passport.authenticate('google',{
    scope: ['profile','email']
}));

app.get('/auth/google/callback',passport.authenticate('google')); // TO handle request of callback when user comes back,Transfer handle to googlestrategy
};