module.exports = {
    name: 'mute',
    expectedArgs: '<user>',
    minArgs: 1,
    maxArgs: 1,
    category:'Moderation',
    description:'A simple ban command',
    slash:false,
    callback: async ({message}) => {
            if (!message.guild.me.permissions.has("MANAGE_GUILD")) return message.reply("**I Don't Have Permissions To Mute Someone! - [MANAGE_GUILD]**")

            var Member = message.mentions.members.first();
            if (!Member) return message.reply("**Please Enter A Valid User To Be Muted!**");

            if (Member === message.member) return message.reply("**You Cannot Mute Yourself!**")
            if (Member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.reply('**Cannot Mute This User!**')

        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.reply('Muted role is not found, attempting to create muted role.')

                let muterole = await message.guild.roles.create({
                    
                        name : 'muted',
                        reason: 'a role for muteds'
                    
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                            ADD_REACTIONS: false,
                            SPEAK: false,
                            CONNECT: false,
                        
                    })
                });
                message.reply('Muted role has sucessfully been created.')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.reply(`${Member.displayName} has already been muted.`)
        await Member.roles.add(role2)
        message.reply(`${Member.displayName} is now muted.`)
    },
    permissions: ['MANAGE_GUILD']
        
}