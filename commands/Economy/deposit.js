const profileModel = require("../../schemas/profile-schema");
module.exports = {
    commands: ['deposit','dep'],
    minArgs: 1,
    maxArgs: 1,
    permissions: [],
    callback:async(message, arguments, profileData) => {
    const amount = arguments[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number");
    try {
      if (amount > profileData.coins) return message.channel.send(`You don't have that amount of Noty(s) to deposit`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            tcoins: -amount,
            bank: amount,
          },
        }
      );

      return message.channel.send(`You deposited ${amount} of Noty(s) into your bank`);
    } catch (err) {
      message.channel.send(err)
    }
  },
};