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
        message.channel.send("Idiot you didn't even know that sum of " + arguments + " is " + sum.toString());
      } catch (err) {
        message.channel.send(err)
      }
         
    },
    permissions: [],
    requiredRoles: [],
  }