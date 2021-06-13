const { Message } = require("discord.js");

module.exports = {
    commands: ['per'],
    expectedArgs: '[total amount] [amount]',
    minArgs: 2,
    maxArgs: 2,

    callback: (message, arguments, text) => {
        try {
            let per = 100;
        arguments.forEach((value) => {
            per = ((parseFloat(value) / per) * 100);
        })
         
        message.channel.send(arguments[0] +" is "+ per + " % of " + arguments[1]);
        } catch (err) {
            message.channel.send(err)
        }
        
    
    },
    permissions: [],
    requiredRoles: [],
}