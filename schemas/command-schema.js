const mongoose = require('mongoose')

const cmdfunction = new mongoose.Schema({
    Guild: { type: String, required: true },
    Cmds: { type: Array }
})
module.exports = mongoose.model('cmd', cmdfunction)