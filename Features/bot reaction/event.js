const feature = require('../../schemas/Feature-schema')

module.exports = (client) => {

    client.on('messageCreate' , async (msg) => {

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
              cache[guild.id] = data = [result.greetevent]
          
          
        }
    
        if(data)
        {
            const OnEnabled = data[0]
    
        
    
        if(OnEnabled === true)
        {

            if(msg.content.toLowerCase().startsWith("hi") || msg.content.toLowerCase().startsWith("Hillo") || msg.content.toLowerCase().startsWith("Hello") )
            {
                msg.reply("Hello :love_you_gesture: ");
            } 
            else if(msg.content.toLowerCase() == "sir" )
            {
                msg.reply("Yess Sir!!!! :eyes:  ");
            }
            else if(msg.content.toLowerCase() == "mam" )
            {
                msg.reply("Yess Ma'am!!!! :eyes:  ");
            } 
            else if(msg.content.toLowerCase().startsWith("namaste"))
            {
            msg.reply("Namasteji :pray:   ");
            }
            else if(msg.content.toLowerCase().startsWith("evening") || msg.content.toLowerCase().startsWith("good evening"))
            {
            msg.reply("Good Evening bruhh :love_you_gesture:    ");
            } 
            else if(msg.content.toLowerCase().startsWith("gud ebening"))
            {
            msg.reply("Good Evening sir!!!! :smiling_imp:    ");
            } 
            else if(msg.content.toLowerCase().startsWith("moring") || msg.content.toLowerCase().startsWith("Good morning"))
            {
            msg.reply("Good Morning :yawning_face:     ");
            }
            else if(msg.content.toLowerCase().startsWith("night") || msg.content.toLowerCase().startsWith("Good night"))
            {
            msg.reply("Good Night :sleeping:      ");
            }
            else 
            {
            return;
            } 

        }

    }
                
        } catch (err) {
            console.log(err)
        }

        
            
        
  
    })

}