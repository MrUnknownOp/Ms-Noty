const economy = require('../../utility/economy')

module.exports = {
  commands: ['addbalance', 'addbal'],
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<The target's @> <coin amount>",
  permissionError: 'You must be an administrator to use this command.',
  permissions: [],
  callback: async (message, arguments) => {
    try {
      const mention = message.mentions.users.first()
    if (message.member.id != "721232818822447106") return message.channel.send(`Sorry only **Mr.Unkown OP** can run this command 😔`);

    if (!mention) {
      message.reply('Please tag a user to add Noty(s) to.')
      return
    }

    const tcoins = arguments[1]
    if (isNaN(tcoins)) {
      message.reply('Please provide a valid numnber of Noty(s).')
      return
    }

    const serverID = message.guild.id
    const userID = mention.id

    const newCoins = await economy.addCoins(serverID, userID, tcoins)

    message.reply(
      `You have given <@${userID}> ${tcoins} Noty(s). They now have ${newCoins} Noty(s)!`
    )
    } catch (error) {
      message.channel.send(error)
    }
    
  },
}