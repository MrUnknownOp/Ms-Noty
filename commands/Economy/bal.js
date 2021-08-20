const profile = require('../../schemas/profile-schema')

const { MessageEmbed } = require('discord.js');


module.exports = {

    commands:['bal','balance'],
    expectedArgs : '<user @>(if left it will take you as user)',
    minArgs : 0,
    maxArgs : 1,
    callback: async(message, profileData) => {

      const {guild} = message;
       
 
    const member = message.mentions.members.first() || message.member;

    
    const result = await profile.findOne({
        userID : member.id,
      })



      let coins = 0
      let bank = 0
      let Space = 0
      if (result) {
        coins = result.coins
        bank = result.bank
        Space = result.Space
       
      } else {

       return console.log('User doesnot exist')
      }
 

      //const memberID = member.id;
    
 
    const embed = new MessageEmbed()
    .setTitle(`${member.user.username}'s Balance`)
    .setDescription(`Wallet: ${coins} Noty(s)
    Bank: ${bank}/${Space}
    Total: ${bank + coins} Noty(s)`)
    .setColor('19BF0C')
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    
    message.channel.send(embed);

    
    }
}