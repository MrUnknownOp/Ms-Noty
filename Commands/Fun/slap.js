const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'slap',
    minArgs: 1,
    maxArgs: 1,
    cooldown: '5s',
    expectedArgs: '<Member>',
    category:'Fun',
    description:'a simple slap command',
    slash: 'both',
    testOnly: true,
    callback: async({message, args, interaction}) => {
        let embed = new MessageEmbed()
        .setColor('GREEN')
        .setTimestamp()
        .setImage('https://cdn.discordapp.com/attachments/861956359095713832/863799368301019156/anime-Slap.gif')
        let target
        if(message) 
        {
            target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            embed.setTitle(`${message.member.displayName} Slapped ${target.displayName}`)
        }
        if(interaction)
        {
            const Member = args.toString();
            const Slapped_User = await interaction.client.users.fetch(Member);
            
            embed.setDescription(`**${interaction.user.username} Slapped ${Slapped_User.username}**`);
        }
        return embed;  
    },
}

