module.exports = {
    name: 'ban',
    expectedArgs: '<user>',
    minArgs: 1,
    maxArgs: 1,
    category:'Moderation',
    description:'A simple ban command',
    slash:false,
    callback: async({message}) => {
            let banMember = message.mentions.members.first();
            if (!banMember) return message.reply("**User Is Not In The Guild**");
            if (banMember === message.member) return message.reply("**You Cannot Ban Yourself**")

            if (!banMember.bannable) return message.reply("**Cant Kick That User**")
                  try {
                  message.guild.members.ban(banMember)
                  banMember.send(`**Hello, You Have Been Banned From ${message.guild.name} for - ${reason || "No Reason"}**`).catch(() => null)
                  } catch {
                      message.guild.members.ban(banMember)
                  }
           
                
            message.reply({content: "**That user has been banned**"})
    },
    permissions: ['BAN_MEMBERS'],
    requiredRoles: [],
}