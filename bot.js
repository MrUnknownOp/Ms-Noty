const Discord = require('discord.js')
require('discord-reply')
const client = new Discord.Client()
const config = require('./config.json')
const music = require('./commands/Music/music')
const wordfilter = require('./Features/bot reaction/abusing')
const antiad = require('./Features/bot reaction/anti-advertise')
const greetevent = require('./Features/bot reaction/event')
const mongo = require('./utility/mongo')
const welcome = require('./commands/Welcome/welcome')
const messagecounter = require('./Features/message-count/message-counter')
const serverscmd = require('./commands/About bot/servers')
const deleting = require('./Features/bot reaction/messagedelete')
const pingreact = require('./Features/bot reaction/ping')
const path = require('path')
const economysys = require('./utility/economy')


const fs = require('fs')
const EventEmitter = require('events')
EventEmitter.defaultMaxListeners = 100;
client.snipes = new Discord.Collection();





client.on('ready', async() => {

  
  
    console.log("Connected as " + client.user.tag)

    const activities = [
			`In ${client.guilds.cache.size} servers!`,
			`&& Watching ${client.channels.cache.size} channels!`,
			`With ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users!`,
      `With You`,
      `&& Watching Non Dynamic Studios`,
      `&& Watching TGC:- The Gamers Clan`
		];

		let i = 0;
		setInterval(() => client.user.setActivity(`${config.prefix}help ${activities[i++ % activities.length]}`, { type: 'PLAYING' }), 30000);
	



    music(client);
    wordfilter(client);
    antiad(client);
    greetevent(client);
    welcome(client);
    messagecounter(client);
    serverscmd(client);
    economysys(client);
    pingreact(client);
    deleting(client);
    

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
          commandBase(client, option)
        }
      }
    }
  
    readCommands('commands')

 
    
  
    
    

  
  await mongo().then((mongoose) => {
    try {
      console.log('Connected to mongo!')
      
    } catch (err) {
      console.log(err)

    }finally {
      mongoose.connection.close()
    }
  })



        channelone = client.channels.cache.find(channel => channel.id === "837673256713584741")
        channelone.send("Bot Connected Succesfully ! " + emoji("853268574172086353"))
        channelone.send("Registering Commands " + emoji("853269497992970302") )
        channelone.send("Registeration Completed succesfully ! "  + emoji("853268574172086353"))
        channelone.send("Registering Features " + emoji("853269497992970302"))
        channelone.send("Registeration Completed succesfully ! "  + emoji("853268574172086353"))
        channelone.send("Connecting to MongoDB ! " + emoji("853269497992970302"))
        channelone.send("Connected to MongoDB ! " + emoji("853268574172086353"))
        channelone.send("Loading Nodes " + emoji("853269497992970302"))
        channelone.send("Loading Nodes Completed succesfully! " + emoji("853268574172086353"))
        channelone.send("Bot is ready and running on its optimal performance ! " + emoji("853272091922399234"))

  
})

function emoji (id) {
     return client.emojis.cache.get(id).toString();
}

client
  .on("debug", console.log)
  .on("warn", console.log)

client.login(config.token)
