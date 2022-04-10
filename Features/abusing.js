const { badwords } = require('../Json/words.json') 
const {Permissions} = require('discord.js');



module.exports = (client) => {

    

    client.on('messageCreate' , async(msg) => {

        try {

            if(msg.author == client.user)
            {
                return;
            }
        
            if(msg.channel.type == 'dm')
            {
              return;
            }
            if (msg.author.bot) return;


            const { member } = msg
    
            if(!member) return
    
            if(msg.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                let confirm = false;
                var i;
                for(i = 0;i < badwords.length; i++) {
                
                if(msg.content.toLowerCase().includes(badwords[i].toLowerCase()))
                    confirm = true;
                
                }
                if(confirm) {
                    msg.delete()
                    return msg.channel.send(`${msg.author},You are not allowed to send badwords here`)
                }    
    
                
                
            
                
            }

        

    
            
        } catch (err) {

            console.log(err)
            
        }

  

        
    })

}

module.exports.config = {
    displayName: 'Anti Swear',
    dbName: 'ANTI-SWEAR'
  }