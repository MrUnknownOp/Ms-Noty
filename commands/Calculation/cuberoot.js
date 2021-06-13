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
            message.channel.send("Cube root of " + arguments + " is " + curt.toString());
        } catch (err) {
            message.channel.send(err)
        }
       

    },
    permissions: [],
    requiredRoles: [],
  }