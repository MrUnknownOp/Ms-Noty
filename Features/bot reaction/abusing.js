const { badwords } = require("./words.json") 
const feature = require('../../schemas/Feature-schema')


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

            const { guild } = msg;

            const cache = {}
    
            let data = cache[guild.id]
    
        if (!data) {
    
          
              const result = await feature.findOne({ _id: guild.id })
                if(result === null) return
              cache[guild.id] = data = [result.antiswear]
          
          
        }
    
        if(data)
        {
            const OnEnabled = data[0]
    
        
    
        if(OnEnabled === true)
        {
    
            const { member } = msg
    
            if(!member) return
    
            if(!msg.member.permission.has("MANAGE_MESSAGES")) {
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

        }

    }
            
        } catch (err) {

            console.log(err)
            
        }

  

        
    })

}