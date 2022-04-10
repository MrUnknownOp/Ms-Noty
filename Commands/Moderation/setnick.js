const { MessageEmbed } = require("discord.js");


module.exports = {
    name: 'nick',
    aliases:['setnick'],
    expectedArgs: '<member> <nickname>',
    minArgs: 2,
    maxArgs: 2,
    category:'Moderation',
    description:'A simple ban command',
    slash:false,
permissions: ['MANAGE_MESSAGES'],
callback: async({message,args}) => {



if (!args[0]) return message.reply("**Please Enter A User!**")
      
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
        if (!member) return message.reply("**Please Enter A Username!**");

        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.reply('**Cannot Set or Change Nickname Of This User!**')

        if (!args[1]) return message.reply("**Please Enter A Nickname**");

        let nick = args.slice(1).join(' ');

        
        member.setNickname(nick)
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`**Changed Nickname of ${member.displayName} to ${nick}**`)
        message.reply({embeds:[embed]})
        
    }

}

