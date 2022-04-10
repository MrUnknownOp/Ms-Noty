module.exports = {
    name: 'create-muted-role',
    aliases:['createmutedrole', 'cmr'],
    category:'Moderation',
    description:'A simple ban command',
    slash:false,
    callback: async ({message}) => {
       
        
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.reply('Muted role is not found, attempting to create muted role.')

                let muterole = await message.guild.roles.create({
                  
                        name : 'muted',
                        permissions: []
                    
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
                message.reply('There was an error while creating the role,please try again in some time')
            }
        } else if (role)
        {
            message.reply(`${message.author} Do you need multiple muted role as this server have one`)
        }
        
    }
}