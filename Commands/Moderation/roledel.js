const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'role-del',
    aliases:['roledel', 'rd'],
    expectedArgs: '<member> <role>',
    minArgs: 1,
    maxArgs: 1,
    category:'Moderation',
    description:'A simple ban command',
    slash:false,
    permissions: ['MANAGE_ROLES'],
    callback: async ({message, args}) => {

        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!rMember) return message.reply("Please provide a user to remove a role from.")
        
        let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
        
        if(!role) return message.reply("Please provide a role to remove from said user.") 
        

    
        if(!rMember.roles.cache.has(role.id)) {
          let rolDEL_err = new MessageEmbed()
          .setColor(`#FF0000`)
          .setDescription(`Error ❌ | ${rMember.displayName}, Does not have this role!`);
    
          return message.reply({embeds:[rolDEL_err]})
        
        } else {
    
          await rMember.roles.remove(role.id).catch(e => console.log(e.message))
          
          let rolDEL = new MessageEmbed()
          .setColor(`#00FF00`)
          .setDescription(`Success ✅ | ${rMember} has been removed from **${role.name}**`)
    
          message.reply({embeds:[rolDEL]})
        
        }
       
    }
}