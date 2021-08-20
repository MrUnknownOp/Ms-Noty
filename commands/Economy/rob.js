const profile = require('../../schemas/profile-schema')
module.exports = {

    commands:['rob'],
    minArgs : 0,
    maxArgs : 0,
    callback: async(message, client) => {

       message.channel.send(`Robbable users in ${message.guild.name}`)

        message.guild.members.cache.forEach(async(member) => {

            profile.findOne({
                userID : member.id
            }).sort([
                ['coins', 'descending']
            ]).exec(async(err , res) => {

                

                if(err) return console.log(err)
                if(res === null) return

                const { userID , coins } = res

                if(coins < 1000) return


                message.channel.send(`<@${userID}> have ${coins} **Noty(s)**`)
            })
            
        });

        
        
        
    }
}