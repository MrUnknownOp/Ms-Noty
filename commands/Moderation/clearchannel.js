module.exports = {
    commands: ['cc' , 'clearchannel'],
    minArgs: 0,
    expectedArgs: "",
    
    callback: async (message, arguments , client) => {
        //if (message.member.hasPermission('ADMINISTRATOR')) {
          try {
            message.channel.messages.fetch().then((results) => {
              message.channel.bulkDelete(results)
            })
          } catch (err) {
            message.channel.send(err)
          }
            
          
    },
    permissions : 'MANAGE_MESSAGES',
}