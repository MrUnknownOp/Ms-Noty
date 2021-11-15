const  Discord  = require("discord.js")
//const { concat } = require("ffmpeg-static")
const developer = 'MR. UNKNOWN OP#3635'

module.exports = {
    commands: ['avatar','av'],
    expectedArgs: '<userid>',
    minArgs: 1,
    maxArgs: 1,

    callback: (message, arguments, text) => {
        
        
          
            //const targetMember = message.guild.members.cache.get(target.id)|| 
            //const { member , mentions } = message;
            try {
                const target = message.mentions.users.first().displayAvatarURL({size:4096, dynamic : true})

                //const avatar = message.guild.members.cache.get(arguments[0]) 
    
                
    
              
               
                const heheboi = new Discord.MessageEmbed()
                .setTitle(`**AVATAR!!**`)
                .setImage(target)
                .setColor('RANDOM')
                .setTimestamp()
                .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)
    
                 message.reply({embeds:[heheboi]})
            } catch (error) {
                message.reply(error)
            }
           
    
           
            
           

           

            
            
            
            
        
            
          
    },
    permissions: [],
    requiredRoles: [],
}