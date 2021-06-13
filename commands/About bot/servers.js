//const { Console } = require('node:console')

const config = require('../../config.json')

module.exports = (client)=> {

    client.on('message' , async (msg) => {

        if(msg.author == client.user)
        {
            return;
        }
    
        if(msg.channel.type == 'dm')
        {
          return;
        }

        if(msg.content.startsWith(config.prefix))
        {
            processing(msg , client);
        }
       
        
            
        
    })

    function processing(msg,client) {
        let fullCommand = msg.content.substr(1);
        let splitCommand = fullCommand.split(" ");
        let Command = splitCommand[0];
        let arguments = splitCommand.slice(1);

        if(Command.toLowerCase() === "servers")
        {
            if (msg.author.id !== "721232818822447106") return  msg.channel.send("you can't use this command")
            
            client.guilds.cache.forEach((guild) => {
                msg.channel.send(
                  `${guild.name} has a total of ${guild.memberCount} members`
                )
              })
        }
    }
    
}