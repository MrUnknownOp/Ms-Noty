module.exports = {
    commands: ['sq'],
    expectedArgs: '[number]',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        try {
            let sq = arguments;
        arguments.forEach((value) => {
            sq = sq*sq
        })
        message.channel.send("Square of " + arguments + " is " + sq.toString());
        } catch (err) {
            message.channel.send(err)
        }
        
    
    },
    permissions: [],
    requiredRoles: [],
  }