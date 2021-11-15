module.exports = {
    commands: ['sqrt'],
    expectedArgs: '[number]',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        try {
            let sqt = arguments;
            arguments.forEach((value) => {
                sqt = Math.sqrt(sqt)
            })
            message.reply("Square root of " + arguments + " is " + sqt.toString());
        } catch (err) {
            message.reply(err)
        }
        

    },
    permissions: [],
    requiredRoles: [],
  }