const Discord = require('discord.js')
const got = require('got')
const Developer = "MR. UNKNOWN OP#3635"

module.exports = {
    commands: ['meme'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 10,
    cooldownmsg:'You are being a memey boi wait',
    callback: (message, arguments, text , client) => {

        try {
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
        //embed.setDescription(`Made by ${Developer}  ${client.user.displayAvatarURL()}`)
        //embed.setFooter(`Made by ${Developer}`, client.user.displayAvatarURL());
        message.channel.send({embeds:[embed]});
        })
        } catch (error) {
            message.channel.send(error)
        }

        
        
    },
    permissions: [],
    requiredRoles: [],
  }

