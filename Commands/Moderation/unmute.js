module.exports = {
    name: 'unmute',
    expectedArgs: '<member>',
    minArgs: 1,
    maxArgs: 1,
    category:'Moderation',
    description:'A simple ban command',
    slash:false,
    permissions: ['MANAGE_GUILD'],
    callback: async ({message, args}) => {

        try {
            const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

            if(!Member) return message.reply('Member not found')
    
            const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');
    
            await Member.roles.remove(role)
    
            message.reply(`${Member.displayName} is now unmuted`)
        
        } catch (error) {
            message.reply(error)
        }
       
       
    }
}