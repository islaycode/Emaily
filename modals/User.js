const mongoose = require('mongoose');
const {Schema} = mongoose; // It says mongoose object has a propert called schema,so take it and assign it to schema

const userSchema = new Schema({
    googleID: String,
    credits:{ type:Number,default: 0 },
});

mongoose.model('users',userSchema);