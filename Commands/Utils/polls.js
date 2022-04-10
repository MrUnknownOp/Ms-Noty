const Discord = require('discord.js')

module.exports = {
    name: 'poll',
    expectedArgs: '<channel> <description>',
    minArgs: 1,
    maxArgs: -1,
    testOnly: true,
    slash:'both',
    category:'Utils',
    description: 'a simple poll command',
    callback: async({message, args, interaction}) => {
        let pollChannel
        let pollDescription
        if(message)
        {
            pollChannel = message.mentions.channels.first();
            pollDescription = args.slice(1).join(' ');
        }
        if(interaction)
        {
            pollDescription = args.slice(1).join(' ');
            const channel = args[0].toString()
            pollChannel = await interaction.client.channels.fetch(channel);
            interaction.reply({content: "Poll sent!"});
        }

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('Server Poll!!!')
        .setDescription(pollDescription.toString())
        .setColor('RANDOM')

        pollChannel.send({embeds:[embedPoll]}).then(embedMessage => {
            embedMessage.react('👍');
            embedMessage.react('👎');
        }); 
    },
    permissions: ['MANAGE_MESSAGES'],
    requiredRoles: [],
  }