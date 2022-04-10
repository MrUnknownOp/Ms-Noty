    module.exports = {
        name: 'slowmode',
        expectedArgs: '<time>',
        minArgs: 1,
        maxArgs: 1,
        category:'Moderation',
        description:'A simple ban command',
        slash:false,
        permissions: ['MANAGE_MESSAGES'],
        callback: async ({message, args}) => {
                            if (!args[0])
                    return message.reply(
                        `You did not specify the time in seconds you wish to set this channel's slow mode too!`
                    );
                    
                    if (isNaN(args[0])) return message.reply(`That is not a number!`);
                    
                    message.channel.setRateLimitPerUser(args[0]);
                    message.reply(
                    `Set the slowmode of this channel too **${args[0]}**`
                    );
            
            
            
           
        }
    }