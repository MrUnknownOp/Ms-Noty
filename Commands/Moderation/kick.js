const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'kick',
    expectedArgs: '<user>',
    minArgs: 1,
    maxArgs: 1,
    category:'Moderation',
    description:'A simple ban command',
    slash:false,
    callback: ({message}) => {
              var kickMember = message.mentions.members.first();
              if (!kickMember) return message.reply("**User Is Not In The Guild!**");

              if (kickMember.id === message.member.id) return message.reply("**You Cannot Kick Yourself!**")

              if (!kickMember.kickable) return message.reply("**Cannot Kick This User!**")
              if (kickMember.user.bot) return message.reply("**Cannot Kick A Bot!**")
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
                  var sembed2 = new MessageEmbed()
                  .setColor("GREEN")
                  .setDescription(`**${kickMember.user.username}** has been kicked`)
              message.reply({embeds:[sembed2]});
    },
    permissions: ['KICK_MEMBERS'],
    requiredRoles: [],
}