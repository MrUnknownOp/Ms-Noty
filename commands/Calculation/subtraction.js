module.exports = {
    commands: ['sub'],
    expectedArgs: '[minuend] [subtrahend]',
    minArgs: 2,
    maxArgs: null,
    callback: (message, arguments, text) => {
        try {
            let diff = 0
            arguments.forEach((value) => {
                diff = parseFloat(value) - diff;
            })
            message.channel.send("Idiot you didn't even know that difference of " + arguments + " is " + diff.toString());
        } catch (err) {
            message.channel.send(err)
        }
        
    },
    permissions: [],
    requiredRoles: [],
  }