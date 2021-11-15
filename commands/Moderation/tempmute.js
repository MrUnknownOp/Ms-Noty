const ms = require('ms')
const {Message, MessageEmbed}= require('discord.js')

module.exports = {
    commands: 'tempmute',
    minArgs: 2,
    expectedArgs: "<Target user's @> <duration> <reason>",
    requiredRoles: [],
    permissions: ['MANAGE_GUILD'],
    callback: async (message, arguments , client) => {
        
        if (!message.guild.me.permissions.has("MANAGE_GUILD")) return message.reply("**I Don't Have Permissions To Mute Someone! - [MANAGE_GUILD]**")
        if (!arguments[0]) return message.reply("**Please Enter A User To Be Muted!**");

        var Member = message.mentions.members.first() || message.guild.members.cache.get(arguments[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === arguments[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === arguments[0].toLocaleLowerCase());
        if (!Member) return message.reply("**Please Enter A Valid User To Be Muted!**");

        if (Member === message.member) return message.reply("**You Cannot Mute Yourself!**")
        if (Member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.reply('**Cannot Mute This User!**')
       
        const time = arguments[1]
        if(!Member) return message.reply('Member is not found.')
        if(!time) return message.reply('Please specify a time.')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.reply('Muted role is not found, attempting to create muted role.')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.reply('Muted role has sucessfully been created.')
            } catch (error) {
                message.reply(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.reply(`${Member.displayName} has already been muted.`)
        await Member.roles.add(role2)
        message.reply(`${Member.displayName} is now muted.`)

        setTimeout(async () => {
            await Member.roles.remove(role2)
        }, ms(time))
    
    }
}