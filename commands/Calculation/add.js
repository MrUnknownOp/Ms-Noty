module.exports = {
    commands: ['add'],
    expectedArgs: '[addends] [addends]',
    minArgs: 2,
    maxArgs: null,
    callback: (message, arguments, text) => {
      try {
        let sum = 0
        arguments.forEach((value) => {
            sum = sum + parseFloat(value);
        })
        message.reply("Idiot you didn't even know that sum of " + arguments + " is " + sum.toString());
      } catch (err) {
        message.reply(err)
      }
         
    },
    permissions: [],
    requiredRoles: [],
  }