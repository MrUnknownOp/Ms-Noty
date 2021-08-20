module.exports = {
    commands: 'gstart',
    expectedArgs: '<channel #> <time> <type(like m,h or d)> <winners> <prize>',
    minArgs: 4,
    maxArgs: null,

    callback: async(message, arguments, text , client) => {

        const channel = message.mentions.channels.first();
        if(!channel) return message.channel.send("Please specify a channel!")



        const gtime = arguments[1]
        const gtimeType = arguments[2]
    
        if (isNaN(gtime)) {
          channel.send('Please provide a number for the duration. ')
          return
        }
    
        const durations = {
          m: 60,
          h: 60 * 60,
          d: 60 * 60 * 24
        }
    
        if (!durations[gtimeType]) {
          message.channel.send('Please provide a valid duration type. ')
          return
        }
    
        const seconds = gtime * durations[gtimeType]

        const gwinner = arguments[3];
        if(!gwinner) return message.channel.send("Please speicfy an amount of winners")

        
        try{
            const gprize = arguments.slice(4).join(" ");
        if(!gprize) return message.channel.send('Please specify a prize to win');
            client.giveaways.startGiveaway({
                prize: gprize,
                channelId: channel.id,
                guildId: message.guild.id,
                duration: seconds * 1000, 
                winners: gwinner, 
                hostedBy: message.author.id
            });
        } catch (error){
            message.channel.send(`Sorry I can't create giveaway due to ${error}`);
        }
        
    },
    permissions: ['MANAGE_MESSAGES'],
    requiredRoles: [],
}