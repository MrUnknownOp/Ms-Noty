module.exports = {
    commands: 'greroll',
    expectedArgs: '<giveaway id>',
    minArgs: 1,
    maxArgs: null,

    callback: async(message, arguments, text , client) => {

       
        try{
           

        const args = message.content.split(' ').slice(1);
        const rerolled = await client.giveaways.rerollGiveaway(args.join(' '));
        
        if (!rerolled) {
            return message.channel.send('This giveaway hasn\'t ended');
        }
        else {
            message.channel.send('Rerolled the giveaway');
        }
        } catch (error){
            message.channel.send(`Sorry I can't reroll giveaway due to ${error}`);
        }
        
    },
    permissions: ['MANAGE_MESSAGES'],
    requiredRoles: [],
}