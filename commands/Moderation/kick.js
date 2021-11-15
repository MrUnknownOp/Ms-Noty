const {MessageEmbed} = require('discord.js')
module.exports = {
    commands: 'kick',
    expectedArgs: '[usertag] [reason]',
    minArgs: 1,
    maxArgs: null,

    callback: (message, arguments) => {

      try {
          

              if (!arguments[0]) return message.reply('**Enter A User To Kick!**')

              var kickMember = message.mentions.members.first() || message.guild.members.cache.get(arguments[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === arguments[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === arguments[0].toLocaleLowerCase());
              if (!kickMember) return message.reply("**User Is Not In The Guild!**");

              if (kickMember.id === message.member.id) return message.reply("**You Cannot Kick Yourself!**")

              if (!kickMember.kickable) return message.reply("**Cannot Kick This User!**")
              if (kickMember.user.bot) return message.reply("**Cannot Kick A Bot!**")

              var reason = arguments.slice(1).join(" ");
              try {
                  const sembed2 = new MessageEmbed()
                      .setColor("RED")
                      .setDescription(`**You Have Been Kicked From ${message.guild.name} for - ${reason || "No Reason!"}**`)
                      .setFooter(message.guild.name, message.guild.iconURL())
                  kickMember.send(sembed2).then(() =>
                      kickMember.kick()).catch(() => null)
              } catch {
                  kickMember.kick()
              }
              if (reason) {
              var sembed = new MessageEmbed()
                  .setColor("GREEN")
                  .setDescription(`**${kickMember.user.username}** has been kicked for ${reason}`)
              message.reply({embeds:[sembed]});
              } else {
                  var sembed2 = new MessageEmbed()
                  .setColor("GREEN")
                  .setDescription(`**${kickMember.user.username}** has been kicked`)
              message.reply({embeds:[sembed2]});
              }
      
      } catch (error) {
        message.reply(`Sorry **${message.author}** I couldn't kick because of : *${error}*`)
      }


        
      
    },
    permissions: ['KICK_MEMBERS'],
    requiredRoles: [],
}