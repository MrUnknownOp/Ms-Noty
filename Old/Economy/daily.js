const dailyRewardsSchema = require('../../schemas/daily-schema')

let claimedCache = []

const clearCache = () => {
  claimedCache = []
  setTimeout(clearCache, 1000 * 60 * 5) // 10 minutes
}
clearCache()

const alreadyClaimed = 'Already claimed'//'You have already claimed your daily rewards'

module.exports = {
    commands : 'daily',
    minArgs : 0,
    maxArgs : 0,
    callback: async(message) => {
        const { guild, member } = message
        const { id } = member

    if (claimedCache.includes(id)) {
      message.reply(alreadyClaimed)
      return
    }



    const obj = {
      guildId: guild.id,
      userId: id,
    }

        const results = await dailyRewardsSchema.findOne(obj)


        if (results) {
          const then = new Date(results.updatedAt).getTime()
          const now = new Date().getTime()

          const diffTime = Math.abs(now - then)
          const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

          if (diffDays <= 1) {
            claimedCache.push(id)

            message.reply(alreadyClaimed)
            return
          }
        }

        await dailyRewardsSchema.findOneAndUpdate(obj, obj, {
          upsert: true,
        })

        claimedCache.push(id)

        message.reply('Claimed right now')
      
    },
}