const profileModel = require("../../schemas/profile-schema");
module.exports = {
    commands: 'beg',
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
  
    callback: async(message) => {
      try {
        const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          tcoins: randomNumber,
        },
      }
    );
    return message.channel.send(`${message.author.username}, you begged and received ${randomNumber} **Noty(s)**`);
      } catch (error) {
        message.channel.send(error)
      }
    
  },
};
