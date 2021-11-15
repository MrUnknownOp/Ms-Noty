const mongo = require('../../utility/mongo')
const warnSchema = require('../../schemas/warn-schema')
const Discord = require('discord.js')
const Developer = "MR. UNKNOWN OP#3635"

module.exports = {
  commands: ['listwarnings', 'lw'],
  minArgs: 1,
  expectedArgs: "<Target user's @>",
  requiredRoles: [],
  callback: async (message, arguments, text , client) => {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify a user to load the warnings for.')
      return
    }

    const guildId = message.guild.id
    const userId = target.id

   
        const results = await warnSchema.findOne({
          guildId,
          userId,
        })

        //let reply = `Previous warnings for <@${userId}>:\n\n`
        const embed = new Discord.MessageEmbed()

        for (const warning of results.warnings) {
          const { author, timestamp, reason } = warning

          //reply += `By ${author} on ${new Date(timestamp).toLocaleDateString()} for "${reason}"\n\n`
          embed.addField(`Previous warnings for ` , `<@${userId}>:\n\n` , true)
          embed.addField(`By ${author} on ${new Date(timestamp).toLocaleDateString()} for \n\n` , `"${reason}"` , false)
          embed.setColor('RED')
          //embed.setFooter(`Made by ${Developer}`, client.user.displayAvatarURL());
          
        }
        // if (!results) {
        //     
        // }
        message.reply({embeds: [embed]})
  },
}