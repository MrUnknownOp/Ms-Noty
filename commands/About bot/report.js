const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: ['report', 'bugreport'],
    minArgs: 1,
    maxArgs: null,
  
    callback: (message, arguments, text, client) => {

        channelone = client.channels.cache.find(channel => channel.id === "861956359095713832")

        const bug = arguments.join(" ");

        const embed = new MessageEmbed()
        .setTitle("New Issue!")
        .setDescription(bug)
        .addField('Server name:-' , message.guild.name)
        .addField('Server name:-' , message.author.toString())
        .setColor('RED')

        channelone.send(embed)
    }
}