    module.exports = {
        commands: ['slowmode', 'sm', 'cooldown'],
        minArgs: 1,
        maxArgs: 1,
        expectedArgs: "[time]",
        requiredRoles: [],
        permissions: ['MANAGE_MESSAGES'],
        callback: async (message, arguments , client) => {
                            if (!arguments[0])
                    return message.reply(
                        `You did not specify the time in seconds you wish to set this channel's slow mode too!`
                    );
                    
                    if (isNaN(arguments[0])) return message.reply(`That is not a number!`);
                    
                    message.channel.setRateLimitPerUser(arguments[0]);
                    message.reply(
                    `Set the slowmode of this channel too **${arguments[0]}**`
                    );
            
            
            
           
        }
    }