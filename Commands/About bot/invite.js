const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'invite',
    slash: 'both',
    category: 'About Bot',
    description: 'a simple invitation command',
    testOnly: true,
    callback: async({message, interaction, client}) => {

      const inviteEmbed = new MessageEmbed()
        .setTitle(   `<a:thanks:863786607327576084> Thanks For Choosing Ms. Noty! <a:thanks:863786607327576084>`)
        .setDescription( '**Please choose any option given below :D**')
        .setColor('BLUE')
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
        .setImage('https://cdn.discordapp.com/attachments/861956359095713832/863796459685543966/discord_bot_ke_liye.gif')
        

      const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('share_able')
        .setLabel('Share-Able link')
        .setEmoji('📪')
        .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
        .setStyle('LINK')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=774225512373551115&permissions=272100390&scope=bot%20applications.commands')
        .setLabel('Invite Now!')
      )

      const row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setStyle('LINK')
        .setURL('https://discord.gg/5YQDkbhtja')
        .setLabel('Support Server!')
      )

      if(message)
      {
        message.reply({embeds: [inviteEmbed], components: [row,row2]})
      } else if(interaction)
      {
        interaction.reply({embeds: [inviteEmbed], components: [row,row2]})
      }
    }
  
}