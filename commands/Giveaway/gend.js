module.exports = {
    commands: 'gend',
    expectedArgs: '<giveaway id>',
    minArgs: 1,
    maxArgs: null,

    callback: async(message, arguments, text , client) => {

       
        try{
           

            const args = message.content.split(' ').slice(1);
            const ended = await client.giveaways.endGiveaway(args.join(' '));
            
            if (!ended) {
                return message.channel.send('This giveaway has already ended');
            }
            else {
                message.channel.send('Ended the giveaway');
            }
        } catch (error){
            message.channel.send(`Sorry I can't end giveaway due to ${error}`);
        }
        
    },
    permissions: ['MANAGE_MESSAGES'],
    requiredRoles: [],
}