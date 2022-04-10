const Discord = require('discord.js')
const got = require('got')

module.exports = {
    name: 'meme',
    cooldown: '10s',
    category: 'Fun',
    description: 'a simple meme command',
    slash: 'both',
    testOnly: true,
    callback: ({message, interaction}) => {
        
        let embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${memeTitle}`)
        embed.setURL(`${memeUrl}`)
        embed.setImage(memeImage)
        embed.setColor('RANDOM')
        embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
        })
        if (message) {
            message.reply({embeds:[embed]}); 
        } else if(interaction)
        {
            interaction.reply({embeds:[embed]});
        }
    },
}

