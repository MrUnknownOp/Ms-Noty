const fetch = require('node-fetch').default;
const feature = require('../../schemas/Feature-schema')



module.exports = (client) => {

     

    client.on("message", async message => {

        

        try {
            if (message.author.bot) return;
        if(message.author == client.user)
        {
            return;
        }
        if(message.channel.type === "dm") return;

        const cache = {}

        const {guild , channel } = message;

        
    let data = cache[guild.id]

    if (!data) {

      
          const result = await feature.findOne({ _id: guild.id })
            if(result === null) return
          cache[guild.id] = data = [result.chatbotId]
      
      
    }

    if(data)
    {
        const chatbotId = data[0]
    

    if(chatbotId === null) return;

        if(message.channel.id === chatbotId)
        {

            message.channel.startTyping();
            var content = message.content;
            var msgAuthor = message.author.id;

            if(content.toLowerCase() === "who is your dev")
            {
                return message.lineReplyNoMention("My dev is **𝙈𝙍. 𝙐𝙉𝙆𝙉𝙊𝙒𝙉#7801**!")
            }

            if(content.toLowerCase() === "what is your name")
            {
                return message.lineReplyNoMention("My name is Ms. Noty, Yeah I am a Noty bot!")
            }

            if(content.toLowerCase() === "who is your developer")
            {
                return message.lineReplyNoMention("My dev is **𝙈𝙍. 𝙐𝙉𝙆𝙉𝙊𝙒𝙉#7801**!")
            }

            if(content.toLowerCase() === "who made you")
            {
                return message.lineReplyNoMention("**𝙈𝙍. 𝙐𝙉𝙆𝙉𝙊𝙒𝙉#7801** made me")
            }

            if(content.toLowerCase() === "your name")
            {
                return message.lineReplyNoMention("Ms. Noty")
            }

            

            

            

            

                try {
                    fetch(`https://api.monkedev.com/fun/chat?msg=${content}&uid=${msgAuthor}&key=X4Ulg1VkyD1mPbewMBZwvY0cA`)
                    .then(response => response.json())
                    .then(data => {
                        message.lineReplyNoMention(data.response);
                    })
                    message.channel.stopTyping();
                } catch (error) {
                    message.lineReply(' there was a error please report to developer')
                }
           
        }
    }else return
        
    
    
        
        } catch (error) {
            console.log(error)
        }

        
        
      });
}