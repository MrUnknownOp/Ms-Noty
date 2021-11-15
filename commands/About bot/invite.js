/*const disbut = require('discord-buttons');
const {MessageEmbed} = require('discord.js')

module.exports = {
    commands: 'invite',
    minArgs: 0,
    maxArgs: 0,
  
    callback: async(message, arguments, text, client) => {

      function emoji(id) {

        try {
          return client.emojis.cache.get(id).toString();
        } catch (error) {
          console.log(error);
        }
           
      }

        
        let btn = new disbut.MessageButton()
        .setStyle('url')
        .setURL('https://discord.com/oauth2/authorize?client_id=774225512373551115&permissions=272100390&scope=bot') 
        .setLabel('Direct Invite') 
        

        let btn2 = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Share-Able link') 
        .setID('shareablelink') 
        //.setTitle('785375486582587423')
        //.setDisabled();

        var id = "785375486582587423"

        const embed = new MessageEmbed()
        .setTitle(   `<a:thanks:863786607327576084> Thanks For Choosing Ms. Noty! <a:thanks:863786607327576084>`)
        .setDescription( '**Please choose any option given below :D**')
        .setColor('BLUE')
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
        .setImage('https://cdn.discordapp.com/attachments/861956359095713832/863796459685543966/discord_bot_ke_liye.gif')
        


  let msg = await message.channel.send(embed, {
    buttons: [btn, btn2]
  });
    }
  
}*/