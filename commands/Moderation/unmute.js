const ms = require('ms')
const {Message, MessageEmbed}= require('discord.js')

module.exports = {
    commands: 'unmute',
    minArgs: 1,
    expectedArgs: "<Target user's @>",
    requiredRoles: [],
    callback: async (message, arguments , client) => {

        try {
            const Member = message.mentions.members.first() || message.guild.members.cache.get(arguments[0])

            if(!Member) return message.channel.send('Member not found')
    
            const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');
    
            await Member.roles.remove(role)
    
            message.channel.send(`${Member.displayName} is now unmuted`)
        
        } catch (error) {
            message.channel.send(error)
        }
       
       
    }
}