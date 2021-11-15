const {MessageEmbed} = require('discord.js')

module.exports = {
    commands: 'lock',
    minArgs: 0,
    maxArgs: 0,

    callback: async(message, arguments, text) => {

        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach( async(role) => {
                await channel.createOverwrite(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e);
        }

        message.reply(`Done | Channel Locked!`);
        
    },
    permissions: ['MANAGE_CHANNELS'],
    requiredRoles: [],
}