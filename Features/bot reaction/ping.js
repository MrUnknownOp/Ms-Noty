const Discord = require('discord.js');
module.exports = (client) => {

    client.on('message' , async (message) => {
        try {

            if(message.author == client.user)
            {
                return;
            }
        
            if(message.channel.type == 'dm')
            {
            return;
            }

            const pingembed = new Discord.MessageEmbed()
            .setTitle('DID SOMEONE PING ME?')
            .setColor('#0099ff')
            .setThumbnail(message.author.displayAvatarURL({dynamic: true }))
            .setDescription(
                'MY PREFIX : `<`',
            )
            .addField('HELP COMMAND : ', '`<help`',false)
            .addField('DEVELOPER :', '`MR. UNKNOWN OP#7801`',false)
            .setTimestamp()
            
            .setFooter(client.user.username, client.user.displayAvatarURL())

        if(message.mentions.has(client.user.id))
         {
            message.lineReply(pingembed)
         }
        } catch (error) {
            console.log(error)
        }
         
    })
}