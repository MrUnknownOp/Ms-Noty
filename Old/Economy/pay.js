const profile = require('../../schemas/profile-schema')

module.exports = {
  commands: ['pay', 'give'],
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<Target user's @> <Amount of coins>",
  callback: async (message, arguments, text) => {
    const { guild, member , author } = message

    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to give coins to.')
      return
    }

    const coinsToGive = arguments[1]
    if (isNaN(coinsToGive)) {
      message.reply('Please provide a valid number of coins to give.')
      return
    }

    const ans = await profile.findOne({userID:author.id})

    if(coinsToGive > ans.coins) return message.reply(`You don't have ${coinsToGive} Noty(s) to give!`)

   const remainingCoins = await profile.findOneAndUpdate(
      {

          userID: author.id,
      },
      {

          userID: author.id,
          $inc:{
              bankSpace: 50,
              coins: -coinsToGive,
          }
      },
      {
          upsert: true
     })

     const newBalance = await profile.findOneAndUpdate(
      {

          userID: target.id,
      },
      {

          userID: target.id,
          $inc:{
              coins: coinsToGive,
          }
      },
      {
          upsert: true
     })



     if(!newBalance)
     {
          return message.reply(`That user doesn't exist in the Database`);
     }

     console.log("User exist")
    

    

    message.reply(
      `You have given <@${target.id}> ${coinsToGive} Noty(s)! They now have ${newBalance.coins} Noty(s) and you have ${remainingCoins.coins} Noty(s)!`
    )
  },
}