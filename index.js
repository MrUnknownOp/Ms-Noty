const {Client , Intents , Collection} = require('discord.js')
const client = new Client({ 
  intents: [ Intents.FLAGS.GUILDS , Intents.FLAGS.GUILD_MESSAGES],
  allowedMentions: {
    parse: ['users','roles'],
    repliedUser: false
  }
})
const config = require('./config.json')
const wordfilter = require('./Features/bot reaction/abusing')
const antiad = require('./Features/bot reaction/anti-advertise')
const greetevent = require('./Features/bot reaction/event')
const mongo = require('./utility/mongo')
const messagecounter = require('./Features/message-count/message-counter')
const deleting = require('./Features/bot reaction/messagedelete')
const path = require('path')
const chatbot = require('./Features/Chatbot/Chatbot')
const antispam = require('./Features/anti-Spam/anti-Spam')
require('node-fetch').default;
const messageButton = require('./utility/button');
const fs = require('fs')
//const EventEmitter = require('events')
//EventEmitter.defaultMaxListeners = 100;
client.snipes = new Collection();







client.on('ready', async() => {

  try {
    console.log("Connected as " + client.user.tag)

    await mongo();

    const activities = [
			`In ${client.guilds.cache.size} servers!`,
			`In ${client.channels.cache.size} channels!`,
			`With ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users!`,
      `TGC:- The Gamers Clan`,
      `${config.prefix}help`,
      `Made by 𝙼𝚁.𝚄𝙽𝙺𝙽𝙾𝚆𝙽#0001`
		];

		let i = 0;
		setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'PLAYING' }), 60000);
	



    wordfilter(client);
    antiad(client);
    greetevent(client);
    messagecounter(client);
    antispam(client);
    deleting(client);
    chatbot(client);
    messageButton(client);
    

    const baseFile = 'Command-base.js'
    const commandBase = require(`./commands/${baseFile}`)
  
    const readCommands = (dir) => {
      const files = fs.readdirSync(path.join(__dirname, dir))
      for (const file of files) {
        const stat = fs.lstatSync(path.join(__dirname, dir, file))
        if (stat.isDirectory()) {
          readCommands(path.join(dir, file))
        } else if (file !== baseFile) {
          const option = require(path.join(__dirname, dir, file))
          commandBase(option)
        }
      }
    }
  
    readCommands('commands')

    commandBase.listen(client);

 
    
  
    
    

  
  
      console.log('Connected to mongo!')
      
   




        //channelone = client.channels.cache.find(channel => channel.id === "837673256713584741")
        //channelone.send(" ");
         //channelone.send("Bot Connected Succesfully ! " + emoji("853268574172086353"))
        // channelone.send("Registering Commands " + emoji("853269497992970302") )
        // channelone.send("Registeration Completed succesfully ! "  + emoji("853268574172086353"))
        // channelone.send("Registering Features " + emoji("853269497992970302"))
        // channelone.send("Registeration Completed succesfully ! "  + emoji("853268574172086353"))
        // channelone.send("Connecting to MongoDB ! " + emoji("853269497992970302"))
        // channelone.send("Connected to MongoDB ! " + emoji("853268574172086353"))
        // channelone.send("Loading Nodes " + emoji("853269497992970302"))
        // channelone.send("Loading Nodes Completed succesfully! " + emoji("853268574172086353"))
        // channelone.send("Bot is ready and running on its optimal performance ! " + emoji("853272091922399234"))
        //const mongoPath = config.mongoPath;
      

  } catch (err) {
    console.log(err)
  }

  
  
    
  
})



client
  .on("debug", console.log)
  .on("warn", console.log)

 client.on("error", function(error){
     console.error(`client's WebSocket encountered a connection error: ${error}`);
 });

 client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
});

process.on('unhandledRejection', error => {
	console.error('Error!!:', error);
});

client.login(config.token)
