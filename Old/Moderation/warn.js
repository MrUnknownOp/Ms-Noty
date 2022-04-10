const mongo = require('../../utility/mongo')
const warnSchema = require('../../schemas/warn-schema')
const Discord = require('discord.js')
const Developer = "MR. UNKNOWN OP#3635"

module.exports = {
  commands: 'warn',
  minArgs: 2,
  expectedArgs: "<Target user's @> <reason>",
  requiredRoles: [],
  callback: async (message, arguments , client) => {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to warn.')
      return
    }

    arguments.shift()

    const guildId = message.guild.id
    const userId = target.id
    const reason = arguments.join(' ')

    const warning = {
      author: message.member.user.tag,
      timestamp: new Date().getTime(),
      reason,
    }

 
        await warnSchema.findOneAndUpdate(
          {
            guildId,
            userId,
          },
          {
            guildId,
            userId,
            $push: {
              warnings: warning,
            },
          },
          {
            upsert: true,
          }
        )
     
    const embed = new Discord.MessageEmbed()
    .setTitle('Someone Was Warned!!')
    .setColor('RED')
    .addFields(
        {name: 'user warned:' , value: `${target}` , inline :false},
        {name : 'By', value : `${message.author}` , inline: false},
        {name: 'reason:', value: `${reason}`, inline: false}
    )
    //.setFooter(`Made by ${Developer}`, client.user.displayAvatarURL());

    const useembed = new Discord.MessageEmbed()
    .setTitle('you where Warned!!')
    .setColor('RED')
    .addFields(
        {name : 'By', value : `${message.author}` , inline: false},
        {name: 'reason:', value: `${reason}`, inline: false}
    )
    //.setFooter(`Made by ${Developer}`, client.user.displayAvatarURL());
    message.reply({embeds:[embed]})
    target.send({embeds:[useembed]})
  },
}