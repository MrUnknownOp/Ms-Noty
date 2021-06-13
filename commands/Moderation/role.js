
const { MessageEmbed } = require("discord.js");
const Developer = "MR. UNKNOWN OP#3635"
module.exports = {
    commands: 'createrole',
    minArgs: '',
    expectedArgs: "",
    permissions : ['MANAGE_ROLES'],
    callback: async (message, arguments , client) => {

      try {
        let rName = arguments[2]
        let rColor = arguments[1];
        
     
      if (!rName) {
        return message.channel.send(
          `You did not specify a name for your role!`
        );
      }
      if (!rColor) {
        return message.channel.send(
          `You did not specify a color for your role!`
        );
      }
      if (rColor >= 16777215)
        return message.channel.send(
          `That hex color range was too big! Keep it between 0 and 16777215`
        );
      if (rColor <= 0)
        return message.channel.send(
          `That hex color range was too small! Keep it between 0 and 16777215`
        );
      
      let rNew = await message.guild.roles.create({
        data: {
          name: rName,
          color: rColor,
        },
      });
      const Embed = new MessageEmbed()
        .setTitle(`New role!`)
        .setDescription(
          `${message.author.username} has created the role "${rName}"\nIts Hex Color Code: ${rColor}\nIts ID: ${rNew.id}`
        )
        .setColor(rColor)
        .setFooter(`Made by ${Developer}`, client.user.displayAvatarURL());
      message.channel.send(Embed);
      } catch (err) {
        message.channel.send(err)
      }
    
    
        
   
  },
};