const prettyMilliseconds = require('pretty-ms');

module.exports = {
    commands: 'glist',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 0,

    callback: async(message, arguments, text , client) => {

       
        try{
           

            const list = await client.giveaways.listGiveaways(message.guild.id);
        
            if (!list) {
                return message.channel.send('No active giveaways.');
            } else {
                message.channel.send(`${list.map(i => `\`${i.messageId}\` - **${i.prize}** | ${prettyMilliseconds(i.timeRemaining)} | Host: **${i.hostedBy}**`).join('\n')}`)
            }
        } catch (error){
            message.channel.send(`Sorry I can't list giveaway due to ${error}`);
        }
        
    },
    permissions: ['MANAGE_MESSAGES'],
    requiredRoles: [],
}