const { MessageEmbed } = require("discord.js");


module.exports = {
commands:['setnickname','setnick'],
minArgs: 2,
maxArgs: null,
expectedArgs: '[mention | name | nickname | ID] <nickname>',
permissions: ['MANAGE_MESSAGES'],
callback: async(message,arguments, client) => {



if (!arguments[0]) return message.reply("**Please Enter A User!**")
      
        let member = message.mentions.members.first() || message.guild.members.cache.get(arguments[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === arguments[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === arguments[0].toLocaleLowerCase()) || message.member;
        if (!member) return message.reply("**Please Enter A Username!**");

        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.reply('**Cannot Set or Change Nickname Of This User!**')

        if (!arguments[1]) return message.reply("**Please Enter A Nickname**");

        let nick = arguments.slice(1).join(' ');

        
        member.setNickname(nick)
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`**Changed Nickname of ${member.displayName} to ${nick}**`)
        message.reply({embeds:[embed]})
        
    }

}

