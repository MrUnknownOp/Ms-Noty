const { badwords } = require("./words.json") 


module.exports = (client) => {

    

    client.on('message' , async(msg) => {

        try {

            if(msg.author == client.user)
            {
                return;
            }
        
            if(msg.channel.type == 'dm')
            {
              return;
            }
    
            const { member } = msg
    
            if(!member) return
    
            if(!msg.member.hasPermission("MANAGE_MESSAGES")) {
                let confirm = false;
                var i;
                for(i = 0;i < badwords.length; i++) {
                
                if(msg.content.toLowerCase().includes(badwords[i].toLowerCase()))
                    confirm = true;
                
                }
                if(confirm) {
                    msg.delete()
                    return msg.lineReply(`${msg.author},You are not allowed to send badwords here`)
                }    
    
                
                
            
                
            }
            
        } catch (err) {

            console.log(err)
            
        }

  

        
    })

}