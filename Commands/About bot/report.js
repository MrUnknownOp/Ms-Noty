const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'report',
    aliases: ['bugreport'],
    category: 'About Bot',
    description: 'to report a issue',
    testOnly: true,
    minArgs: 1,
    maxArgs: -1,
    expectedArgs:'<bug>',
    slash:'both',
    callback: async({message, args, client, interaction}) => {

        let bugs;

        channelone = client.channels.cache.find(channel => channel.id === "861956359095713832")
        let embed = new MessageEmbed()
        .setTitle("New Issue!")
        .setColor('RED')
        if(interaction)
        {
            embed.addField('Server name:-' , interaction.guild.name)
            embed.addField('User name:-' , interaction.user.toString())
            bugs = args;
            bugs.toString();
            console.log(bugs.toString());
        } else {
            embed.addField('Server name:-' , message.guild.name)
            embed.addField('Server name:-' , message.author.toString())
             bugs = args.join(" ");
            console.log(bugs);
        }
        embed.setDescription(bugs.toString())
        

        

        channelone.send({embeds:[embed]})
        return 'Thanks for your contribution, my devs will fix the issue soon!';

        
    }
}