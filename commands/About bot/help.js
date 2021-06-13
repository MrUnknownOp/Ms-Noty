
const Discord = require('discord.js')
//const { kill } = require('node:process')
const developer = 'MR. UNKNOWN OP#3635'

module.exports = {
  commands: ['help', 'h'],
  callback: (message, arguments, text, client) => {

    

    if (arguments.length<1) {
        const help = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(`:books:Commands` )
      .addField('PREFIX:', '`<`' , true)
      .addField('VERSION:', '`4.2.7`' , true)
      .setAuthor('Ms. Noty Help Command')
      .addFields(
        {name : ':question: | __Who is Ms. Noty?__', value: 'she is a very efficient and optimize moderator bot for your server having every single function an epic bot should have (From Fun, Mod to music) coded in a very user friendly way so that it will become your most loyal friend that can do many thing for `YOU` !!!!!' , inline: false},
        {name : ':question: | __Currency__', value: '`Noty(s)`' , inline: false},
        {name: ':link: | __Important Links__:' , value : '[INVITE](https://discord.com/api/oauth2/authorize?client_id=774225512373551115&permissions=272100390&scope=bot) | [SUPPORT SERVER](http://dsc.gg/nds) | [DSC.GG](https://dsc.gg/msnoty)' , inline: false},
        {name: ':hammer_pick: | __COMMANDS__:', value:'TYPE: <help <command category name> TO GET EXTENDED INFORMATION ABOUT THAT COMMAND CATEGORY',inline: false}
      )
      .addFields(
        {name:':trophy: FUN' , value: '`<help fun`', inline:true},
        {name:':game_die: GAMES       ', value:'`<help games`       ', inline:true},
        {name:':scales:  MODERATOR       ', value:'`<help mod`', inline:true},
        {name:':gem: NORMALS       ', value:'`<help normal`', inline:true},
        {name:':tools: UTILITIES       ', value:'`<help utils`', inline:true},
        {name:':tada: EXTRAS       ', value:'`<help extras`', inline:true},
        {name:':robot: BOT INFO       ', value:'`<help bot`', inline:true},
        {name:':musical_note:  Music       ', value:'`<help music`', inline:true},
        {name:':tada: Beta       ', value:'`<help beta`', inline:true},
        {name:':tada: Features       ', value:'`<help features`', inline:true},
        {name:':moneybag: Economy       ', value:'`<help Economy`', inline:true},

      )
      .setTimestamp()
      .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)
      message.channel.send({embed: help}).then(embedMessage => {
        embedMessage.react('🔥');
    });

    
    } else if (arguments[0].toLowerCase() === "fun") {

     
      
      
      const funembed = new Discord.MessageEmbed()
      .setTitle('Fun category')
      .setColor('GREEN')
      .addFields({ name:"Note:" , value:"Word Inside `<>` =  MANDATORY ARGUEMENTS and Word Inside `[]` =  Can be used instead of full command" ,inline: false }
      )
      .addFields(
        {name:   ':ribbon: __Slap__' , value: "`<slap <user's tag>` ,slaps the user with funny gifs "},
        {name: ':ribbon: __Meme__' , value: "`<meme` ,sends a meme"},
        {name:   ':ribbon: __Avatar__' , value: "`<avatar[av] <usertag>` , shows the avatar of the user who's id is given"},
        {name:   ':ribbon: __RedText__' , value: "`<redtext <text to say>` , sends a text given by the user"},
        {name:   ':ribbon: __Snipe__' , value: "`<snipe` , snipes the deleted text and sends you"},
      )
      .setTimestamp()
      .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

      message.channel.send({embed: funembed}).then(embedMessage => {
        embedMessage.react('🔥');
    });

    }else if (arguments[0].toLowerCase() === "games") {

      
      
      const funembed = new Discord.MessageEmbed()
      .setTitle('Games category')
      .setColor('GREEN')
      .addFields({ name:"Note:" , value:"Word Inside `<>` =  MANDATORY ARGUEMENTS and Word Inside `[]` =  Can be used instead of full command" ,inline: false }
      )
      .addFields(
        {name:   ':ribbon: __Tic Tac Tue / Cross Zero__' , value: "`<tictactue,[ttt],[zerocross],[zc] <user's tag>` , starts a tic tac tue[zero cross] game which can be played with 2 players "},
        {name:   ':ribbon: __Fast Typing Game__' , value: "`<fasttype,[ft]` , starts a Fast Typing game, you can score points by writing correct word"},
      )
      .setTimestamp()
      .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

      message.channel.send({embed: funembed}).then(embedMessage => {
        embedMessage.react('🔥');
    });

    }else if (arguments[0].toLowerCase() === "mod") {

      
      
      const funembed = new Discord.MessageEmbed()
      .setTitle('Moderator category')
      .setColor('GREEN')
      .addFields({ name:"Note:" , value:"Word Inside `<>` =  MANDATORY ARGUEMENTS and Word Inside `[]` =  Can be used instead of full command" ,inline: false }
      )
      .addFields(
        {name:   ':ribbon: __Ban__' , value: "`<ban <user's tag> <reason>` , Bans the user permanently"},
        {name:   ':ribbon: __Unban__' , value: "`<unban <user's tag>` , Unbans the user if banned"},
        {name:   ':ribbon: __Mute__' , value: "`<mute <user's tag> <reason>` , mutes the user permanently"},
        {name:   ':ribbon: __Tempmute__' , value: "`<tempmute <user's tag> <reason>` , mutes the user for specific time"},
        {name:   ':ribbon: __Unmute__' , value: "`<unmute <user's tag>` ,Unmutes the user if muted"},
        {name:   ':ribbon: __Warn__' , value: "`<warn <user's tag> <reason>` , Warns the user and stores the warn data of user"},
        {name:   ':ribbon: __List warns__' , value: "`<listwarnings,[lw] <user's tag>` , List the previous warns of the user if he/she was warned before"},
        {name:   ':ribbon: __CreateMutedRole__' , value: "`<createmutedrole,[cmr]` , Creates a muted role if it is not present"},
        {name:   ':ribbon: __CreateRole__' , value: "`<createrole <colour> <name(must not include any spaces)>` , creates role "},
        {name:   ':ribbon: __ClearChannel__' , value: "`<clearchannel,[cc]` , Does bulk delete in messaged channel"},
        {name:   ':ribbon: __Invites__' , value: "`<invites` , shows the all inviters of a server"},
      )
      .setTimestamp()
      .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

      message.channel.send({embed: funembed}).then(embedMessage => {
        embedMessage.react('🔥');
    });

    } else if (arguments[0].toLowerCase() === "calc") {

      
      
      const funembed = new Discord.MessageEmbed()
      .setTitle('Calculation category')
      .setColor('GREEN')
      .addFields({ name:"Note:" , value:"Word Inside `<>` =  MANDATORY ARGUEMENTS and Word Inside `[]` =  Can be used instead of full command" ,inline: false }
      )
      .addFields(
        {name:   ':ribbon: __Add__' , value: "`<add <number> . . . . . <numbers>` , adds 2 or more than 2 number with spaces"},
        {name:   ':ribbon: __Subract__' , value: "`<sub <number> . . . . . <numbers>` , subtracts 2 or more than 2 number with spaces"},
        {name:   ':ribbon: __Multiply__' , value: "`<mult <number> . . . . . <numbers>`, multiply 2 or more than 2 number with spaces"},
        {name:   ':ribbon: __Divide__' , value: "`<div <number> . . . . . <numbers>` , divides  2 or more than 2 number with spaces"},
        {name:   ':ribbon: __Cube__' , value: "`<cu <number>` , finds the cube of given number"},
        {name:   ':ribbon: __CubeRoot__' , value: "`<cbrt <number>` , finds the cube root of given number"},
        {name:   ':ribbon: __Square__' , value: "`<sq <number>` , finds the square of given number"},
        {name:   ':ribbon: __SquareRoot__' , value: "`<sqrt <number>` , finds the square root of given number"},
        {name:   ':ribbon: __Percent__' , value: "`<per <total amount> <amount>` , finds the percent of the givenm amount "},
      )
      .setTimestamp()
      .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

      message.channel.send({embed: funembed}).then(embedMessage => {
        embedMessage.react('🔥');
    });

    } else if (arguments[0].toLowerCase() === "bot") {

      
      
      const funembed = new Discord.MessageEmbed()
      .setTitle('Bot Info category')
      .setColor('GREEN')
      .addFields({ name:"Note:" , value:"Word Inside `<>` =  MANDATORY ARGUEMENTS and Word Inside `[]` =  Can be used instead of full command" ,inline: false }
      )
      .addFields(
        {name:   ':ribbon: __Ping__' , value: "`<ping` , tells the current ping of the bot"},
        {name: ':ribbon: __Update__' , value: "`<update,[uptime]` , tells the current uptime of the bot or updated how many days ago"},
        {name: ':ribbon: __Help__' , value: "`<help` , opens the help panel"},
      )
      .setTimestamp()
      .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

      message.channel.send({embed: funembed}).then(embedMessage => {
        embedMessage.react('🔥');
    });

    } else if (arguments[0].toLowerCase() === "extras") {

      
      
      const funembed = new Discord.MessageEmbed()
      .setTitle('Extras category')
      .setColor('GREEN')
      .addFields({ name:"Note:" , value:"Word Inside `<>` =  MANDATORY ARGUEMENTS and Word Inside `[]` =  Can be used instead of full command" ,inline: false }
      )
      .addFields(
        {name:   ':ribbon: __Welcome__' , value: "`<setwelcome <wellcome msg>` , send a message when new user joins , use <@> to tag new user, for example :- <setwelcome Hey there <@> check out #rules and have fun where, <setwelcome in main command and <Hey there <@> check out #rules and have fun where> is the welcome message"},
      )
      .setTimestamp()
      .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

      message.channel.send({embed: funembed}).then(embedMessage => {
        embedMessage.react('🔥');
    });

    } else if (arguments[0].toLowerCase() === "music") {

      
      
      const funembed = new Discord.MessageEmbed()
      .setTitle('Music category')
      .setColor('GREEN')
      .addFields({ name:"Note:" , value:"Word Inside `<>` =  MANDATORY ARGUEMENTS and Word Inside `[]` =  Can be used instead of full command" ,inline: false }
      )
      .addFields(
        {name:   ':ribbon: __Play__' , value: "`<play,[p] <song>` , plays a song"},
        {name:   ':ribbon: __Stop__' , value: "`<stop,[s],[leave]` , stop and leaves the channel"},
        {name:   ':ribbon: __Loop__' , value: "`<loop,[l],[repeat],[r]` , turns loop mode to onn or off"},
        {name:   ':ribbon: __Seek__' , value: "`<seek <time in seconds>` , skipes some second for specified time"},
        {name:   ':ribbon: __Filter__' , value: "`<<specific filter>` , changes the filter to specified filter , you can choose filter from(`3d, bassboost, echo, karaoke, nightcore, vaporwave, flanger, gate, haas, reverse, surround, mcompand, phaser, tremolo, earwax`) For example :- <3d will change the filter to 3d music"},
        {name:   ':ribbon: __Queue__' , value: "`<queue,[q]` , tells the current queue"},
        {name:   ':ribbon: __Volume__' , value: "`<volume,[vol] <percent>` , changes the volume"},
        {name:   ':ribbon: __Jump__' , value: "`<jump,[j] <queue number>` , jumps to a queue"},
        {name:   ':ribbon: __Autoplay__' , value: "`<autoplay,[ap]` , changes autoplay mode to on or off "},
        {name:   ':ribbon: __Pause__' , value: "`<pause` , pauses the video"},
        {name:   ':ribbon: __Resume__' , value: "`<resume` , resumes the song"},
        {name:   ':ribbon: __Skip__' , value: "`<skip` , skips the current playing song"},
        {name:   ':ribbon: __Lyrics__' , value: "`<lyrics<artist name>[ly]` , shows the lyrics of current playing song"},
        {name:   ':ribbon: __Resume__' , value: "`<resume` , resumes a paused song"},
        {name:   ':ribbon: __Pause__' , value: "`<pause` , pauses a current playing song"},
        {name:   ':ribbon: __Status__' , value: "`<status` , shows the status of current playing song"},
        {name:   ':ribbon: __Nowplaying__' , value: "`<nowplaying[np]` , Shows the current playing song"},
        {name:   ':ribbon: __Shuffle__' , value: "`<shuffle[mix]` , shuffles the current playlist"},
        {name:   ':ribbon: __Playskip__' , value: "`<playskip[ps]<song name>` , skips a song and plays another song right away"},
      )
      .setTimestamp()
      .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

      message.channel.send({embed: funembed}).then(embedMessage => {
        embedMessage.react('🔥');
    });

    }  else if (arguments[0].toLowerCase() === "beta") {

      
      
      const funembed = new Discord.MessageEmbed()
      .setTitle('Beta category')
      .setColor('GREEN')
      .setDescription('You are seeing beta commands which are released and are a bit buggy but released so you can use them but at your own risk they might not work properly')
      .addFields({ name:"Note:" , value:"Word Inside `<>` =  MANDATORY ARGUEMENTS and Word Inside `[]` =  Can be used instead of full command" ,inline: false }
      )
      .addFields(
        {name:   ':ribbon: __Cooldown[From Utility]__' , value: "`<cooldown <number>` , nothing can be done right now"},
      )
      .setTimestamp()
      .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

      message.channel.send({embed: funembed}).then(embedMessage => {
        embedMessage.react('🔥');
    });

    }   else if (arguments[0].toLowerCase() === "utils") {

      
      
      const funembed = new Discord.MessageEmbed()
      .setTitle('Utility category')
      .setColor('GREEN')
      .addFields({ name:"Note:" , value:"Word Inside `<>` =  MANDATORY ARGUEMENTS and Word Inside `[]` =  Can be used instead of full command" ,inline: false }
      )
      .addFields(
        {name:   ':ribbon: __Poll__' , value: "`<poll [channel] [description]` sends a poll to specified channel"},
        {name:   ':ribbon: __Serverinfo__' , value: "`<serverinfo` sends every info you should know about a server"},
        {name:   ':ribbon: __Userinfo__' , value: "`<userinfo [user(if left empty it will take you as user)]` sends every info you should know about a user"},

      )
      .setTimestamp()
      .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

      message.channel.send({embed: funembed}).then(embedMessage => {
        embedMessage.react('🔥');
    });

    }  else if (arguments[0].toLowerCase() === "features") {

      
      
      const funembed = new Discord.MessageEmbed()
      .setTitle('Beta category')
      .setColor('GREEN')
      .setDescription('You are seeing beta commands which are released and are a bit bug free but not fully bug free and released so you can use them but at your own risk they might not work properly')
      .addFields({ name:"Note:" , value:"Word Inside `<>` =  MANDATORY ARGUEMENTS and Word Inside `[]` =  Can be used instead of full command" ,inline: false }
      )
      .addFields(
        {name:   ':ribbon: __Anti-abouse__' , value: "`Prevents member from verbal abouse` , Fuck ,Sucks ,Bitch ,Pussy ,madarchod ,madarjhaat ,saale ,chutiye ,laand ,bsdk ,ma ka bhosda ,ma ko kutta chode ,Fank ,hoes ,Motherfack ,lodu ,bhosdike ,sex , are some word which will be removed when sent in a public channel"},
        {name:   ':ribbon: __Anti-advertise__' , value: "`Prevents member from advertising` , remove any discord advertisements"},
        {name:   ':ribbon: __Reaction__' , value: "`Reacts to you` , reacts with you when you type 'hi ,good night ,good morning ,good evening ,sir ,mam ' etc."},
      )
      .setTimestamp()
      .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

      message.channel.send({embed: funembed}).then(embedMessage => {
        embedMessage.react('🔥');
    });

    }   else if (arguments[0].toLowerCase() === "economy") {

      
      
      const ecoembed = new Discord.MessageEmbed()
      .setTitle('Economy category')
      .setColor('GREEN')
      //.setDescription('You are seeing beta commands which are released and are a bit bug free but not fully bug free and released so you can use them but at your own risk they might not work properly')
      .addFields({ name:"Note:" , value:"Word Inside `<>` =  MANDATORY ARGUEMENTS and Word Inside `[]` =  Can be used instead of full command" ,inline: false }
      )
      .addFields(
        {name:   ':ribbon: __Balance__' , value: "`<balance[bal] <user/if left blank ,it will take you as user>` , tells the balance in your wallet and account"},
        {name:   ':ribbon: __Beg__' , value: "`<beg` , a simple begging command , gives you random number of T-coins"},
        {name:   ':ribbon: __Deposit__' , value: "`<deposit[dep] <amount>` , deposits the money into your bank account"},
        {name:   ':ribbon: __Withdraw__' , value: "`<withdraw[wd] <amount>` , withdraws the money into your wallet"},
        {name:   ':ribbon: __Give__' , value: "`<Give[pay] <user> <amount>` , gives the specified amount to mentioned user from the account of message author"},
        {name:   ':ribbon: __Add-balance__' , value: "`<addbalance[addbal] <user> <amount>` , adds the specified balance to specified user `__NOTE:-__ Can only be run by the developer`"},
      )
      .setTimestamp()
      .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

      message.channel.send({embed: ecoembed}).then(embedMessage => {
        embedMessage.react('🔥');
    });

    }
      
    
   
    
  },
}