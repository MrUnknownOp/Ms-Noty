const path = require('path')
const Discord = require('discord.js');
module.exports = (client) => {

    client.on('message' , async (receivedMessage) => {

        try {
                if(receivedMessage.author == client.user)
            {
                return;
            }
        
            if(receivedMessage.channel.type == 'dm')
            {
            return;
            }

            if(receivedMessage.content.toLowerCase().startsWith("hi") || receivedMessage.content.toLowerCase().startsWith("Hillo") || receivedMessage.content.toLowerCase().startsWith("Hello") )
            {
                receivedMessage.lineReply("Hello :love_you_gesture: ");
            } 
            else if(receivedMessage.content.toLowerCase() == "sir" )
            {
                receivedMessage.lineReply("Yess Sir!!!! :eyes:  ");
            }
            else if(receivedMessage.content.toLowerCase() == "mam" )
            {
                receivedMessage.lineReply("Yess Ma'am!!!! :eyes:  ");
            } 
            else if(receivedMessage.content.toLowerCase().startsWith("namaste"))
            {
            receivedMessage.lineReply("Namasteji :pray:   ");
            }
            else if(receivedMessage.content.toLowerCase().startsWith("evening") || receivedMessage.content.toLowerCase().startsWith("good evening"))
            {
            receivedMessage.lineReply("Good Evening bruhh :love_you_gesture:    ");
            } 
            else if(receivedMessage.content.toLowerCase().startsWith("gud ebening"))
            {
            receivedMessage.lineReply("Good Evening sir!!!! :smiling_imp:    ");
            } 
            else if(receivedMessage.content.toLowerCase().startsWith("moring") || receivedMessage.content.toLowerCase().startsWith("Good morning"))
            {
            receivedMessage.lineReply("Good Morning :yawning_face:     ");
            }
            else if(receivedMessage.content.toLowerCase().startsWith("night") || receivedMessage.content.toLowerCase().startsWith("Good night"))
            {
            receivedMessage.lineReply("Good Night :sleeping:      ");
            }
            else 
            {
            return;
            } 
                
        } catch (err) {
            console.log(err)
        }

        
            
        
  
    })

}