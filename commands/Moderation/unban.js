module.exports = {
    commands: 'unban',
    expectedArgs: '[user id]',
    minArgs: 1,
    maxArgs: 1,

    callback: (message, arguments, text) => {
        try {
            let toBan = arguments[0]
        
        //const reason = arguments[1] || "There was no reason!";

        message.guild.members.unban(toBan);
      
        message.channel.send(`<@${toBan}> has been unbanned from the server!`)
        } catch (error) {
            message.lineReply(error)
        }
        
    },
    permissions: ['BAN_MEMBERS'],
    requiredRoles: [],
}