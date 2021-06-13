const economy = require('../../utility/economy')

module.exports = {
  commands: ['give','pay'],
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<Target user's @> <Amount of coins>",
  callback: async (message, arguments, text) => {

    try {
      const { guild, member } = message

    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to give Noty(s) to.')
      return
    }

    const coinsToGive = arguments[1]
    if (isNaN(coinsToGive)) {
      message.reply('Please provide a valid number of Noty(s) to give.')
      return
    }

    const coinsOwned = await economy.getCoins(guild.id, member.id)
    if (coinsOwned < coinsToGive) {
      message.reply(`You do not have ${coinsToGive} Noty(s)!`)
      return
    }

    const remainingCoins = await economy.addCoins(
      guild.id,
      member.id,
      coinsToGive * -1
    )
    const newBalance = await economy.addCoins(guild.id, target.id, coinsToGive)

    message.reply(
      `You have given <@${target.id}> ${coinsToGive} Noty(s)! They now have ${newBalance} Noty(s) and you have ${remainingCoins} Noty(s)!`
    )
    } catch (error) {
      message.channel.lineReply(error)
    }
    
  },
}