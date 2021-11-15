const {MessageEmbed} = require('discord.js')

module.exports = {
    commands: 'ban',
    expectedArgs: '[usertag]',
    minArgs: 1,
    maxArgs: null,

    callback: async(message, arguments, text) => {

      try {
            
            if (!arguments[0]) return message.reply("**Please Provide A User To Ban!**")

            let banMember = message.mentions.members.first() || message.guild.members.cache.get(arguments[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === arguments[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === arguments[0].toLocaleLowerCase());
            if (!banMember) return message.reply("**User Is Not In The Guild**");
            if (banMember === message.member) return message.reply("**You Cannot Ban Yourself**")

            var reason = arguments.slice(1).join(" ");

            if (!banMember.bannable) return message.reply("**Cant Kick That User**")
                  try {
                  message.guild.members.ban(banMember)
                  banMember.send(`**Hello, You Have Been Banned From ${message.guild.name} for - ${reason || "No Reason"}**`).catch(() => null)
                  } catch {
                      message.guild.members.ban(banMember)
                  }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${banMember.user.username}** has been banned for ${reason}`)
            message.reply({embeds:[sembed]})
            } else {
                var sembed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${banMember.user.username}** has been banned`)
            message.reply({embeds:[sembed2]})
            }
      } catch (error) {
        message.reply(`Sorry **${message.author}** I couldn't ban because of : *${error}*`);
      }
        
    },
    permissions: ['BAN_MEMBERS'],
    requiredRoles: [],
}