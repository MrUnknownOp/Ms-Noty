const profileModel = require("../../schemas/profile-schema");
module.exports = {
    commands: ['withdraw','wd'],
    minArgs: 1,
    maxArgs: 1,
    permissions: [],
    callback:async(message, arguments, profileData) => {
    const amount = arguments[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Withdrawn amount must be a whole number");

    try {
      if (amount > profileData.bank) return message.channel.send(`You don't have that amount of ***Noty(s)*** to withdraw`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            tcoins: amount,
            bank: -amount,
          },
        }
      );

      return message.channel.send(`You withdrew ${amount} of ***Noty(s)*** into your wallet`);
    } catch (err) {
      message.channel.send(err)
    }
  },
};