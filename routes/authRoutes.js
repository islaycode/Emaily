const passport = require('passport')

module.exports = app => {
//Whenever user comes to /auth/google we will forward them to oath flow managed by passport
app.get('/auth/google',
passport.authenticate('google',{
    scope: ['profile','email']
}));

app.get('/auth/google/callback',passport.authenticate('google'),
(req,res)=>{
    res.redirect('/surveys');
}
); // To handle request of callback when user comes back,Transfer handle to googlestrategy

app.get('/api/logout',(req,res)=>{ //log outs user
    req.logout();
    res.redirect('/');
});

app.get('/api/current_user',(req,res)=>{ //displays current user in json format
    res.send(req.user);
})
};