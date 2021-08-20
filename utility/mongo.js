const mongoose = require('mongoose')
//const { mongoPath } = require('../config.json')
const mongoPath = 'mongodb+srv://shashank:shashankisop@cluster0.3yxxn.mongodb.net/TRIDENT?retryWrites=true&w=majority'


module.exports = async () => {
  try {

    await mongoose.connect(mongoPath, {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    return mongoose
    
  } catch (err) {
     
    console.log(err)

    
  }
  
}