const profile = require('../../schemas/profile-schema')
const {users} = require('./names.json')
module.exports = {



    commands:'beg',
    minArgs : 0,
    maxArgs : 0,
    callback: async(message, arguments, text, client) => {

        const { guild, author } = message
       
        const randomCoins = Math.floor(Math.random() * 499) + 1;
        const amount = 50;

        const result = await profile.findOneAndUpdate({

            userID: author.id
        },
        {

            userID: author.id,
            $inc:{
                coins: randomCoins,
                bankSpace: amount
            }
        },
        {
            upsert: true
        }
        )

        const ans = await profile.findOne({userID: author.id})

        

        var beggeduser = Math.floor(Math.random() * users.length)
    
       await message.channel.send(`You begged and **${users[beggeduser]}** gave you ${randomCoins} Noty(s), Now you have ${ans.coins} Noty(s)`)
    
    }

}