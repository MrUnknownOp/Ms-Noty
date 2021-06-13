const mongoose = require('mongoose')



const profileSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true },
    serverID: { type: String, require: true },
    tcoins: { type: Number, default: 1000 , required: true},
    bank: { type: Number },
  });

module.exports = mongoose.model('profiles', profileSchema)