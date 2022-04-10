const {Client , Intents , Collection} = require('discord.js')
const WOKCommands = require('wokcommands')
const client = new Client({ 
  intents: [ Intents.FLAGS.GUILDS , Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
  allowedMentions: {
    parse: ['users','roles'],
    repliedUser: false
  }
})
module.exports = client;
const config = require('./Json/config.json')

const path = require('path')
require('node-fetch').default;
client.snipes = new Collection();







client.on('ready', async() => {
    console.log("Connected as " + client.user.tag)
    new WOKCommands(client, {
      commandsDir: path.join(__dirname, 'Commands'),
      featuresDir: path.join(__dirname, 'Features'),
      defaultLangauge: 'english',
      showWarns: false,
      ignoreBots: true,
      mongoUri: config.MongoPath,
      dbOptions: {
        keepAlive: true
    },
    testServers: config.testServers,
    botOwners: config.DeveloperID,
    disabledDefaultCommands: [
      'help',
      'language',
      'requiredrole',
      'channelonly'
  ],
      
    })
    .setDefaultPrefix(config.prefix)
    .setDisplayName('Ms. Noty')
    .setCategorySettings([
      {
        name: 'About Bot',
        emoji: '<a:bot:864486345874866197>'
      },
      {
        name: 'Calculation',
        emoji: '📲'
      }
    ])

    const activities = [
			`In ${client.guilds.cache.size} servers!`,
			`In ${client.channels.cache.size} channels!`,
			`With ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users!`,
      `TGC:- The Gamers Clan`,
      `${config.prefix}help`,
      `${config.Developer}`
		];

		let i = 0;
		setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'PLAYING' }), 60000);
})
//.on("debug", console.log)
//.on("warn", console.log)
.on("error", function(error){console.error(`client's WebSocket encountered a connection error: ${error}`);})
.on('shardError', error => {console.error('A websocket connection encountered an error:', error);})
.login(config.token)
process.on('unhandledRejection', error => {
	console.error('Error!!:', error);
});

