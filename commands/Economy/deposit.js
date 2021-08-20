const profile = require('../../schemas/profile-schema')


module.exports = {

    commands:['dep','deposit'],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs:'<amount of Noty(s)>',
    callback: async(message, arguments, text, client) => {
       const {guild, author} = message

       const money = arguments[0];

       if(isNaN(money) && arguments[0].toLowerCase() === "all" || arguments[0].toLowerCase() === "max")
       {
                    
                const ans = await profile.findOne({userID:author.id})

                let spaceLeft;

                spaceLeft = ans.Space - ans.bank;

                console.log(spaceLeft)

                if(money > ans.coins) return message.lineReply(`You don't have ${money} Noty(s) to deposit`)
                if(money > spaceLeft) return message.lineReply(`You don't have enough bank space to deposit`)

                    await profile.findOneAndUpdate(
                    {
                        userID: author.id,
                    },
                    {

                        userID: author.id,
                        $inc:{
                            bank: spaceLeft,
                            coins: -spaceLeft,
                        }
                    },
                    {
                        upsert: true
                })

                message.channel.send(`Deposited all Noty(s)!! into your bank account!`)
           return
       } else {

       

       
       const ans = await profile.findOne({userID:author.id})

       let spaceLeft;

       spaceLeft = ans.Space - ans.bank;

       console.log(spaceLeft)

       if(money > ans.coins) return message.lineReply(`You don't have ${money} Noty(s) to deposit`)
       if(money > spaceLeft) return message.lineReply(`You don't have enough bank space to deposit`)

        await profile.findOneAndUpdate(
        {
            userID: author.id,
        },
        {

            userID: author.id,
            $inc:{
                bank: money,
                coins: -money,
            }
        },
        {
            upsert: true
       })

       message.channel.send(`Deposited ${money} Noty(s)!! into your bank account!`)
    }
    }

}