const mongo = require('./mongo')
const profileSchema = require('../schemas/profile-schema')

const coinsCache = {} // { 'guildId-userId': coins }

module.exports = (client) => {}

module.exports.addCoins = async (serverID, userID, tcoins) => {
  return await mongo().then(async (mongoose) => {
    try {
      //console.log('Running findOneAndUpdate()')

      const result = await profileSchema.findOneAndUpdate(
        {
          serverID,
          userID,
        },
        {
          serverID,
          userID,
          $inc: {
            tcoins,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      //console.log('RESULT:', result)

      coinsCache[`${serverID}-${userID}`] = result.tcoins

      return result.tcoins
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getCoins = async (serverID, userID) => {
  const cachedValue = coinsCache[`${serverID}-${userID}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      //console.log('Running findOne()')

      const result = await profileSchema.findOne({
        serverID,
        userID,
      })

      //console.log('RESULT:', result)

      let coins = 0
      if (result) {
        coins = result.tcoins
      } else {
        //console.log('Inserting a document')
        await new profileSchema({
          serverID,
          userID,
          tcoins,
          bank,
        }).save()
      }

      coinsCache[`${serverID}-${userID}`] = coins

      return coins
    } finally {
      mongoose.connection.close()
    }
  })
}