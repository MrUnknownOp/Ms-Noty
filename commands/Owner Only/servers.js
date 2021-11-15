const Discord = require('discord.js');

module.exports = {
    commands: ['servers' , 'channels' , 'users'],
    minArgs: 0,
    maxArgs: 0,
  
    callback: (message, arguments, text, client) => {

      function emoji (id) {

        try {
          return client.emojis.cache.get(id).toString();
        } catch (error) {
          console.log(error);
        }
           
      }

    

        if (message.author.id !== "721232818822447106") return  message.channel.send("you can't use this command")
            
          var server = client.guilds.cache.size;
         var dcchannel = client.channels.cache.size;
        var user = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0);

        const infoembed = new Discord.MessageEmbed()
        .setTitle('My User Statistics')
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`MADE BY 𝙈𝙍. 𝙐𝙉𝙆𝙉𝙊𝙒𝙉#6969` , `${message.author.displayAvatarURL({dynamic : true})}`)
        .addFields(
          {name: `${emoji("861945426445991976")} **Servers** :-` , value: `**${server.toString()}**!!` , inline : false},
          {name: `${emoji("861945426373640232")} **Channels** :-` , value: `**${dcchannel.toString()}**!!` , inline : false},
          {name: `${emoji("861945426827673622")} **Users** :-` , value: `**${user.toString()}**!!` , inline : false},
        )
        .setTimestamp()
        .setColor('RANDOM')


        message.reply({embeds:[infoembed]});

        
    },
    permissions: [],
    requiredRoles: [],
}



