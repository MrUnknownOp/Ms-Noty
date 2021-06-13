const { links } = require("./words.json") 


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
                for(i = 0;i < links.length; i++) {
                
                if(msg.content.toLowerCase().includes(links[i].toLowerCase()))
                    confirm = true;
                
                }
                if(confirm) {
                    msg.delete()
                    return msg.channel.send(`${msg.author},You are not allowed to advertise here`)
                }    

                
                
            
                
            }
        } catch (err) {
            console.log(err)
        }
  
        
        
    })

}