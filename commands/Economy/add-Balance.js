const profile = require('../../schemas/profile-schema')



module.exports = {

    commands:['add-bal','add-balance'],
    expectedArgs : '<user> <amount>',
    minArgs : 2,
    maxArgs : 2,
    callback: async(message , arguments) => {

        if (message.member.id != "721232818822447106") return message.channel.send(`Sorry only **𝙈𝙍. 𝙐𝙉𝙆𝙉𝙊𝙒𝙉** can run this command 😔`);
        const amount = arguments[1];
        const target = message.mentions.users.first();
        if (!target) return message.channel.send("You need to mention a player to give them Noty(s)");
    
        if (isNaN(amount)) return message.channel.send("Deposit amount must be a whole number");
    
        try {
          const targetData = await profile.findOne({ userID: target.id });
          if (!targetData) return message.channel.send(`This user doens't exist in the db`);
    
          await profile.findOneAndUpdate(
            {
              userID: target.id,
            },
            {
              $inc: {
                coins: amount,
              },
            }
          );
    
          return message.channel.send(`This player has been given ${amount} Noty(s)`);
        } catch (err) {
          console.log(err);
        }

    
    }
}