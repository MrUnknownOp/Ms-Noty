
const Discord = require('discord.js')

module.exports = {
    commands: 'pranktext',
    minArgs: 1,
    maxArgs: null,
    cooldown: 5,
    callback: (message, arguments, text,client) => {

        try {
            const pranked = arguments.join(" ")
            message.channel.send("```" +  pranked + "```")
        } catch (err) {
            message.reply(`I can't help you to text due to ${err}`)
        }

        
    },
    permissions: [],
    requiredRoles: [],
}
