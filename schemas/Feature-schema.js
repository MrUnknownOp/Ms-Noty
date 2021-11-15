const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const otherfeature = mongoose.Schema({
    _id: reqString,
    antiadvertise: {type: Boolean, required: true}, 
    antiswear: {type: Boolean, required: true}, 
    greetevent: {type: Boolean, required: true},
    chatbotId: reqString ,
    antispam: {type: Boolean, required: true},
})

module.exports = mongoose.model('feature', otherfeature)