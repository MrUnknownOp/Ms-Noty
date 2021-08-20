const profileSchema = require('../schemas/profile-schema')

const coinsCache = {} 

module.exports = (client) => {}

module.exports.addCoins = async (guildId, userId, coins) => {


      const result = await profileSchema.findOneAndUpdate(
        {
          guildId,
          userId,
        },
        {
          guildId,
          userId,
          $inc: {
            coins,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )


      coinsCache[`${guildId}-${userId}`] = result.coins

      return result.coins
   
  
}

module.exports.getCoins = async (guildId, userId) => {
  const cachedValue = coinsCache[`${guildId}-${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  


      const result = await profileSchema.findOne({
        guildId,
        userId,
      })



      let coins = 0
      let bank = 0
      let bankSpace = 0
      if (result) {
        coins = result.coins
        bank = result.bank
        bankSpace = result.bankSpace
      } else {

        await new profileSchema({
          guildId: guildId,
          userId: userId,
          coins:1000,
          bank:0,
          bankSpace: 1000,
        }).save()
      }

      coinsCache[`${guildId}-${userId}`] = coins

      return coins , bank, bankSpace;
      
   
}

