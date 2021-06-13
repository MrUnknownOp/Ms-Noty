module.exports = {
    commands: 'slap',
    minArgs: 1,
    maxArgs: 1,
    cooldown: 5,
    callback: (message, arguments, text,client) => {

        if(arguments.length < 1) return message.channel.send(`${message.author} please tag someone boi!!!`)
        const target = message.mentions.users.first()
        if (!target) {
        message.reply('Please specify someone to slap.')
        return
        }

        
        
        message.channel.send(`${message.author} slapped ${target}`).then((msg) => {
            msg.channel.send("https://tenor.com/view/no-angry-anime-slap-gif-7355956")
          })

                
               
        
        
    },
    permissions: [],
    requiredRoles: [],
}

