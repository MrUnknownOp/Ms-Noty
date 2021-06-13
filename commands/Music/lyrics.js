const Discord = require('discord.js');
const lyricsFinder = require('lyrics-finder');


module.exports = {
    commands: ['lyrics','ly'],
    minArgs: 0,
    maxArgs: null,
    cooldown: 0,
    cooldownmsg:'You are being a serial killer, please wait till ',
    callback: async(message, arguments, text,client) => {
        try {
            if (arguments.length < 1)
        return message.channel.send("Please enter the artist name first. !lyrics <Artist Name>")
    
    let artist = arguments.join(" ");
    let songName = '';
    let pages = [];
    let currentPage = 0;

    const messageFilter = m => m.author.id === message.author.id;
    const reactionFilter = (reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && (message.author.id === user.id)

    message.channel.send("Please enter the song name now");
    await message.channel.awaitMessages(messageFilter, { max: 1, time: 15000 }).then(async collected => {
        songName = collected.first().content;
        await finder (artist, songName, message, pages)
    })

    const lyricEmbed = await message.channel.send(`Lyrics page: ${currentPage+1}/${pages.length}`, pages[currentPage])
    await lyricEmbed.react('⬅️');
    await lyricEmbed.react('➡️');

    const collector = lyricEmbed.createReactionCollector(reactionFilter);

    collector.on('collect', (reaction, user) => {
        if(reaction.emoji.name === '➡️'){
            if(currentPage < pages.length-1){
                currentPage+=1;
                lyricEmbed.edit(`Lyrics page: ${currentPage+1}/${pages.length}`, pages[currentPage]);
                message.reactions.resolve(reaction).users.remove(user)
            }
        }else if(reaction.emoji.name === '⬅️'){
            if (currentPage !== 0){
                currentPage -= 1;
                lyricEmbed.edit(`Lyrics page: ${currentPage+1}/${pages.length}`, pages[currentPage])
                message.reactions.resolve(reaction).users.remove(user)
            }
        }
        })
        } catch (error) {
            message.channel.send(error)
        }
    
    }
}

async function finder(artist, songName, message, pages){
    try {
        let fullLyrics = await lyricsFinder(artist, songName) || "Not Found!";

    for (let i = 0; i < fullLyrics.length; i += 2048){
        const lyric = fullLyrics.substring(i, Math.min(fullLyrics.length, i + 2048));
        const msg = new Discord.MessageEmbed()
            .setDescription(lyric)
        pages.push(msg);
    }
    } catch (error) {
        message.channel.send(error)
    }
    
}


    