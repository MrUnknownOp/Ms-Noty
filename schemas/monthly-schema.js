const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const monthlyRewardsSchema = mongoose.Schema(
  {
    guildId: reqString,
    userId: reqString,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('monthly-rewards', monthlyRewardsSchema)