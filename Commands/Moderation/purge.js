module.exports = {
    name: 'purge',
    expectedArgs: '<Number>',
    minArgs: 1,
    maxArgs: 1,
    category:'Moderation',
    description:'A simple ban command',
    slash:false,
    callback: async ({message, args}) => {
                    if (isNaN(args[0]))
                    return message.reply('**Please Supply A Valid Amount To Delete Messages!**');

                if (args[0] > 100)
                    return message.reply('**Please Supply A Number Less Than 100!**');

                if (args[0] < 1)
                    return message.reply('**Please Supply A Number More Than 1!**');

                message.channel.bulkDelete(args[0]).then(messages => message.channel.send(`**Succesfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({ timeout: 15000 }))).catch(() => null)   
    },
    permissions: ['MANAGE_MESSAGES'],
}