//Importing express
const express = require('express')
//Creating our app which uses express features
const app = express();

app.get('/',(req,res)=>{
    res.send({ hi: "there",
    bye: "buddy", 
});
});
//Dynamic PORT binding for heroku
const PORT = process.env.PORT || 5000;
// || 5000 means port 5000 will be used in development enviorment by us, process.env will be port of heroku
app.listen(PORT);