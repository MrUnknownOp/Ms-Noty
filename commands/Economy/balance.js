const profileData = require('../../schemas/profile-schema')

module.exports = {
    commands: ['balance','bal'],
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
    callback:async(message ) => {

      

      try {
        const coin = await profileData.findOne(
          { userID: message.author.id },
          {tcoins: type = Number},
          {bank: tybe =  Number}
          
          )
          //console.log(coins)
          message.channel.send(`Your wallet have ${coin.tcoins} Noty(s), your bank have ${coin.bank} Noty(s)`);
      } catch (error) {
        message.channel.send(error)
      }

        
    },
  };