
const Discord = require('discord.js')

module.exports = {
    commands: 'snipe',
    minArgs: 0,
    maxArgs: 0,
    cooldown: 5,
    callback: (message, arguments, text,client) => {

        try {
            const msg = client.snipes.get(message.channel.id)
            const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setAuthor(msg.author, msg.member.user.displayAvatarURL())
            .setDescription(msg.content)
            .setFooter('Get Sniped lol....')
            .setTimestamp();

            if(msg){
                message.channel.send({embeds:[embed]});
            }
            else{
                message.reply("Nothing to snipe lol");
            }
        } catch (err) {
            message.reply(err)
        }

        
        
    }
}