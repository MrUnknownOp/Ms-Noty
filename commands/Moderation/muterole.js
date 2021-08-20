module.exports = {
    commands: ['createmutedrole','cmr'],
    minArgs: 0,
    expectedArgs: "",
    requiredRoles: [],
    permissions: 'MANAGE_ROLES',
    callback: async (message, arguments , client) => {
       
        
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('Muted role is not found, attempting to create muted role.')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        
                    })
                });
                message.channel.send('Muted role has sucessfully been created.')
            } catch (error) {
                message.channel.send('There was an error while creating the role,please try again in some time')
            }
        } else if (role)
        {
            message.channel.send(`${message.author} Do you need multiple muted role as this server have one`)
        }
        
    }
}