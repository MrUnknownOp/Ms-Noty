const Discord = require('discord.js');
const config = require('../../Json/config.json');

module.exports = {
    name: 'servers',
    aliases: ['channels', 'users'],
    slash: 'both',
	  category: 'Owner Only',
	  description: 'Tells server, channel and user count',
    ownerOnly: true,
	  testOnly: true,
    callback: ({message,client, interaction}) => {

        
          var server = client.guilds.cache.size;
         var dcchannel = client.channels.cache.size;
        var user = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0);

        let infoembed = new Discord.MessageEmbed()
        .setTitle('My User Statistics')
        .addFields(
          {name: `<:server:861945426445991976> **Servers** :-` , value: `**${server.toString()}**!!` , inline : false},
          {name: `<:channel:861945426373640232> **Channels** :-` , value: `**${dcchannel.toString()}**!!` , inline : false},
          {name: `<:user:861945426827673622> **Users** :-` , value: `**${user.toString()}**!!` , inline : false},
        )
        .setTimestamp()
        .setColor('RANDOM')

        if(message)
        {
          infoembed.setThumbnail(message.author.displayAvatarURL())
          infoembed.setFooter(config.Developer , `${message.author.displayAvatarURL({dynamic : true})}`)
        } else if(interaction)
        {
          infoembed.setFooter(config.Developer , `${interaction.user.displayAvatarURL({dynamic : true})}`)
          infoembed.setThumbnail(interaction.user.displayAvatarURL())
        }


        return infoembed;

        
    },
}



