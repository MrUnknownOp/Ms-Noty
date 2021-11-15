module.exports = {
    commands: ['div'],
    expectedArgs: '[divisor] [dividend]',
    minArgs: 2,
    maxArgs: null,
    callback: (message, arguments, text) => {
        try {
            let que = 1
        arguments.forEach((value) => {
            que = parseFloat(value) / que;
        })
        message.reply("Idiot you didn't even know that quotient of " + arguments + " is " + que.toString());
        } catch (err) {
            message.reply(err)
        }
        
    },
    permissions: [],
    requiredRoles: [],
  }