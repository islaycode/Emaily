//keys.js figure out what set of credential to return

const { model } = require("mongoose");

if(process.env.NODE_ENV == 'production'){
// we are in production - return prod set of keys
    module.exports = require('./prod');
} else{
// we are in development = return the dev keys !!
    module.exports = require('./dev'); //It will require and export the keys for development
}