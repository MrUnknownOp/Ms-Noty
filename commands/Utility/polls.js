const Discord = require('discord.js')

module.exports = {
    commands: 'poll',
    expectedArgs: '[#{channel}] [Description]',
    minArgs: 1,
    maxArgs: null,

    callback: async(message, arguments, text) => {

        try {
            let pollChannel = message.mentions.channels.first();
        let pollDescription = arguments.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('Server Poll!!!')
        .setDescription(pollDescription)
        .setColor('RANDOM')
        let msgEmbed =  pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
   
        } catch (err) {
            message.channel.send(`I can't send poll due to ${err}`)
        }
        
    },
    permissions: ['MANAGE_MESSAGES'],
    requiredRoles: [],
  }