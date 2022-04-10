const profile = require('../../schemas/profile-schema')


module.exports = {

    commands:['wd','withdraw'],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs:'<amount of Noty(s)>',
    callback: async(message, arguments, text, client) => {
        const {guild, author} = message

        const money = arguments[0];
 
        if(isNaN(money) && arguments[0].toLowerCase() === "all" || arguments[0].toLowerCase() === "max")
        {
                     
                 const ans = await profile.findOne({userID:author.id})


                 let bankc = ans.bank
                
                 
 
                     await profile.findOneAndUpdate(
                     {
                         userID: author.id,
                     },
                     {
 
                         userID: author.id,
                         $inc:{
                             bank: -bankc,
                             coins: bankc,
                         }
                     },
                     {
                         upsert: true
                 })
 
                 message.reply(`Withdrawn all Noty(s)!! into your wallet!`)
            return
        } else {
 
        
 
        
        const ans = await profile.findOne({userID:author.id})
 
 
         await profile.findOneAndUpdate(
         {
             userID: author.id,
         },
         {
 
             userID: author.id,
             $inc:{
                 bank: -money,
                 coins: money,
             }
         },
         {
             upsert: true
        })
 
        message.reply(`Withdrawn ${money} Noty(s)!! into your Wallet!`)
     }
    }

}