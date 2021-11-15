module.exports = {
    commands: 'purge',
    minArgs: 0,
    expectedArgs: "[number of messages]",
    
    callback: async (message, arguments , client) => {
          try {
                    if (isNaN(arguments[0]))
                    return message.reply('**Please Supply A Valid Amount To Delete Messages!**');

                if (arguments[0] > 100)
                    return message.reply('**Please Supply A Number Less Than 100!**');

                if (arguments[0] < 1)
                    return message.reply('**Please Supply A Number More Than 1!**');

                message.channel.bulkDelete(arguments[0]).then(messages => message.channel.send(`**Succesfully deleted \`${messages.size}/${arguments[0]}\` messages**`).then(msg => msg.delete({ timeout: 15000 }))).catch(() => null)
            
        
        
            


          } catch (err) {
            console.log(err)
          }
            
          
    },
    permissions : 'MANAGE_MESSAGES',
}