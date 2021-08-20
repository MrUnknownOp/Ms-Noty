const mongo = require('../../utility/mongo')
const messageCountSchema = require('../../schemas/message-count-schema')

module.exports = (client) => {

  

  client.on('message', async (message) => {

    return;
    const { author } = message
    const { id } = author

    
        await messageCountSchema
          .findOneAndUpdate(
            {
              _id: id,
            },
            {
              $inc: {
                messageCount: 1,
              },
            },
            {
              upsert: true,
            }
          )
          .exec()
     
   
  })
}