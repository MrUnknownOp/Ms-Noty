const  Discord  = require("discord.js")
const {Developer} = require('../../Json/config.json') 

module.exports = {
    name: 'avatar',
    aliases:['av'],
    expectedArgs: '[userid]',
    category: 'Fun',
    description: 'A simply avatar command',
    minArgs: 0,
    maxArgs: 1,
    slash: 'both',
    testOnly: true,
    callback: async({message, interaction, args}) => {
        if (message) {
            const target = message.mentions.users.first() || message.member;
            const heheboi = new Discord.MessageEmbed()
            .setTitle(`${target.displayName}'s Avatar!`)
            .setImage(target.displayAvatarURL({dynamic:true, size: 4096}))
            .setColor(target.displayHexColor)
            .setFooter(`MADE BY ${Developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)
            .setTimestamp()
    
            message.reply({embeds:[heheboi]})
        }
        if(interaction)
        {
            const target = args[0].toString() || interaction.user.id; 
            const AvatarUser = await interaction.client.users.fetch(target);
            const heheboi = new Discord.MessageEmbed()
            .setTitle(`${AvatarUser.username}'s Avatar!`)
            .setImage(AvatarUser.displayAvatarURL({dynamic:true, size: 4096}))
            .setColor(target.hexAccentColor)
            .setFooter(`MADE BY ${Developer}` , `${interaction.user.displayAvatarURL({dynamic : true})}`)
            .setTimestamp()
    
            interaction.reply({embeds:[heheboi]})
        }
                
    },
}