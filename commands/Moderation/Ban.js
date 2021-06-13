module.exports = {
    commands: 'ban',
    expectedArgs: '[usertag]',
    minArgs: 1,
    maxArgs: null,

    callback: async(message, arguments, text) => {

      try {
        
  
        const target = message.mentions.users.first();

        

        
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been ban");
        }else{
            message.channel.send(`You coudn't ban that member!`);
        }
      } catch (error) {
        message.reply(`Sorry **${message.author}** I couldn't ban because of : *${error}*`);
      }
        
    },
    permissions: ['BAN_MEMBERS'],
    requiredRoles: [],
}