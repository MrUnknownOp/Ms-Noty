module.exports = {
    commands: 'kick',
    expectedArgs: '[usertag]',
    minArgs: 1,
    maxArgs: null,

    callback: (message, arguments, text , client) => {

      try {
        const target = message.mentions.users.first();

        
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
      
      } catch (error) {
        message.reply(`Sorry **${message.author}** I couldn't kick because of : *${error}*`)
      }


        
      
    },
    permissions: ['KICK_MEMBERS'],
    requiredRoles: [],
}