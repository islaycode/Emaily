const express = require('express'); //Importing express
const mongoose = require('mongoose');
require('./modals/User'); // Execute or requiring the models where is actually defined model class
require('./services/passport') // We're running this file to pull models
const keys =  require('./config/keys');
mongoose.connect(keys.mongoURI);
const app = express();//Creating our app which uses express features

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; //Dynamic PORT binding for heroku
// || 5000 means port 5000 will be used in development enviorment by us, process.env will be port of heroku
app.listen(PORT);