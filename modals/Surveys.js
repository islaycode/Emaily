const mongoose = require ('mongoose')
const { schema } = mongoose
const RecipientSchema = require('Recipient') //importing subdocument collections for recipients

const surveySchema = new Schema ({
     title: String,
     body: String,
     subject: String,
     recipients: [RecipientSchema],
     yes: {type: Number, default: 0},
     no: {type: Number, default: 0},
     _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // It says everything is defined for a specific user,It will assign a objectId and ref is reference to User schema
    dateSent: Date, // to record the date when it was sent
    lastResponded: Date // to record the date it was responded by user
    });

mongoose.model('surveys', surveySchema);