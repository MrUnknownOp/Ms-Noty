module.exports = {
    commands: ['cu'],
    expectedArgs: '[number]',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        try {
            let cu = arguments;
        arguments.forEach((value) => {
            cu = cu*cu*cu
        })
        message.reply("Cube of " + arguments + " is " + cu.toString());
    
        } catch (err) {
            message.reply(err)
        }
        
    },
    permissions: [],
    requiredRoles: [],
  }