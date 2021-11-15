module.exports = {
    commands: ['cbrt'],
    expectedArgs: '[number]',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {

        try {
            let curt = arguments;
            arguments.forEach((value) => {
                curt = Math.cbrt(curt)
            })
            message.reply("Cube root of " + arguments + " is " + curt.toString());
        } catch (err) {
            message.reply(err)
        }
       

    },
    permissions: [],
    requiredRoles: [],
  }