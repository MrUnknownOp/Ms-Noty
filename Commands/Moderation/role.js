module.exports = {
    name: 'createrole',
    minArgs: 2,
    maxArgs:-1,
    expectedArgs: "[hexcolor] [name]",
    permissions : ['MANAGE_ROLES'],
    callback: async ({message, args}) => {

      try {
        let rName = args.slice(1).join(' ');
        let rColor = args[0];
        
     
      if (!rName) {
        return message.reply(
          `You did not specify a name for your role!`
        );
      }
      if (!rColor) {
        return message.reply(
          `You did not specify a color for your role!`
        );
      }
      if (rColor >= 16777215)
        return message.reply(
          `That hex color range was too big! Keep it between 0 and 16777215`
        );
      if (rColor <= 0)
        return message.reply(
          `That hex color range was too small! Keep it between 0 and 16777215`
        );
      
      let rNew = await message.guild.roles.create({
        
          name: rName,
          color: rColor,
       
      });
      
      message.reply('That role has been created!!');
      } catch (err) {
        console.log(err)
      }
  },
};