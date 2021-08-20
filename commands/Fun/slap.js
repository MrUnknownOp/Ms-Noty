const { MessageEmbed } = require('discord.js')

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

        const embed = new MessageEmbed()
        .setTitle('**Get Slapped LOL.....**')
        .setDescription( `${message.author} slapped ${target}`)
        .setColor('GREEN')
        .setTimestamp()
       // .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
        .setImage('https://cdn.discordapp.com/attachments/861956359095713832/863799368301019156/anime-Slap.gif')
        
        
        message.channel.send(embed);

                
               
        
        
    },
    permissions: [],
    requiredRoles: [],
}

