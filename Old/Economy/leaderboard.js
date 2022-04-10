const profile = require('../../schemas/profile-schema')

const { MessageEmbed } = require('discord.js');


module.exports = {

    commands:['lb', 'leaderboard'],
    minArgs : 0,
    maxArgs : 1,
    callback: async(message, client) => {
        
        
        profile.find({
            lb: "all"
        }).sort([
            ['coins', 'descending']
        ]).exec(async(err , res) => {
            if(err) return console.log(err)

            var page = Math.ceil(res.length / 10)

            const embed = new MessageEmbed()
            .setTitle(`Leaderboards Of **Ms. Noty**`)
            .setColor('19BF0C')
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL({dynamic : true}))

            var pg = parseInt(arguments[0])

            if(pg != Math.floor(pg)) pg = 1;
            if(!pg) pg = 1;

            console.log(pg)

            let end = pg * 10;
            let start = (pg * 10) - 10;

            if(res.length === 0)
            {

                embed.addField('Error!' , 'No page found!')

            } else if (res.length <= start)
            {

                embed.addField('Error!' , 'page not found!')

            } else if (res.length <= end)
            {

                embed.setFooter(`Page ${pg} of ${page}`)
                for(i = start; i < res.length; i++)
                {
                    

                    const dbMember = await message.client.users.fetch(res[i].userID)

                    embed.addField(`${i + 1}. ${dbMember.username}`, `${res[i].coins.toLocaleString()} **Noty(s)**`);
                }
                
            } else 
            {
                embed.setFooter(`Page ${pg} of ${page}`)
                for(i = start; i < end; i++)
                {
                    const dbMember = await  message.client.users.fetch(res[i].userID)
                    embed.addField(`${i + 1}. ${dbMember.username}`, `${res[i].coins.toLocaleString()} **Noty(s)**`);
                }
            }
            message.reply({embeds:[embed]});
        })
        
    }
}