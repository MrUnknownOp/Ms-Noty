module.exports = {
    name: 'role-add',
    aliases:['roleadd','ra'],
    expectedArgs: '<member> <role>',
    minArgs: 2,
    maxArgs: 2,
    category:'Moderation',
    description:'A simple ban command',
    slash:false,
    permissions: ['MANAGE_ROLES'],
    callback: async ({message, args}) => {
            let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
            if(!rMember) return message.reply("Please provide a user to add a role too.")
            
            let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
            
            if(!role) return message.reply("Please provide a role to add to said user.") 
            
        
            if(!message.guild.me.permissions.has(["MANAGE_ROLES"])) return message.reply("I don't have permission to perform this command. Please give me Manage Roles Permission!")
        
            if(rMember.roles.cache.has(role.id)) {
                
              return message.reply(`${rMember.displayName}, already has the role!`)
            
            } else {
                
              await rMember.roles.add(role.id).catch(e => console.log(e.message))
              
              message.reply(`${rMember.displayName} has been added to **${role.name}**`)
            
            } 
    }
}