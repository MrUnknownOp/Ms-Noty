const profile = require('../../schemas/profile-schema')

module.exports = {
  commands: ['steal'],
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "<Target user's @>",
  callback: async (message, arguments) => {
    const { guild, member , author } = message

    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to steal.')
      return
    }

    const randomCoins = Math.floor(Math.random() * 499) + 1;

    const ans = await profile.findOne({userID : target.id})

    if(!ans) return message.reply(`That user isn't in the database!`)

    if(ans.coins < 1000) 
    {
        return message.reply(`The user doesn't even have 1000 Noty(s), You can't steal anything from that guy.`)
    }

   const remainingCoins = await profile.findOneAndUpdate(
      {

          userID: author.id,
      },
      {

          userID: author.id,
          $inc:{
              bankSpace: 50,
              coins: randomCoins,
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
              coins: -randomCoins,
          }
      },
      {
          upsert: true
     })





    

    

    message.reply(
      `you stole ${randomCoins} Noty(s) from <@${target.id}> !`
    )
  },
}