const express = require('express'); //Importing express
const mongoose = require('mongoose');
const cookieSession = require('cookie-session'); //Gives access to cookie
const passport = require('passport'); // It will tell passport to make use of them.
require('./modals/User'); // Execute or requiring the models where is actually defined model class
require('./services/passport') // We're running this file to pull models
require('./modals/Survey');
const bodyParser = require('body-parser');
const keys =  require('./config/keys');
mongoose.connect(keys.mongoURI);

const app = express();//Creating our app which uses express features

app.use(bodyParser.json()); //Middleware

app.use(    //Middleware
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000,
        keys:[keys.cookieKey]
    })
);
app.use(passport.initialize()); //Initializing cookie //Middleware
app.use(passport.session()); // Starting session //Middleware

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === "production"){
    // Express will serve up production assests like our main.js, or main.css file!
    app.use(express.static('client/build'));

    //Express will serve up the index.html if it doesn't recognize the route
    const path = require('path');
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })

}

const PORT = process.env.PORT || 5000; //Dynamic PORT binding for heroku
// || 5000 means port 5000 will be used in development enviorment by us, process.env will be port of heroku
app.listen(PORT);