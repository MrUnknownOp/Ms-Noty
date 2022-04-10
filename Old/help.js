
/*const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const developer = '𝙈𝙍. 𝙐𝙉𝙆𝙉𝙊𝙒𝙉#6969'
//const {MessageButton, MessageActionRow} = require('discord-buttons')

const serverprfix = '`<`';

module.exports = {
  commands: 'help',
  callback: (message, arguments, text, client) => {
    //Full Help Embed
        if(arguments.length <1){

          

            let button = new MessageButton()
            .setStyle('LINK')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=774225512373551115&permissions=272100390&scope=bot%20applications.commands') 
            .setLabel('Invite Me!');
            let button2 = new MessageButton()
            .setLabel('Support Server!') 
            .setStyle('LINK')
            .setURL('https://discord.gg/5YQDkbhtja') 
            let btn = new MessageButton()
            .setCustomId('shareablelink') 
            .setLabel('Share-Able link') 
            .setStyle('PRIMARY')
            

            let row = new MessageActionRow()
            .addComponents(btn, button, button2)

            

            var HelpEmbed = new MessageEmbed()
            .setTitle('<:cmd:864466451347013644> **Commands Of Ms. Noty**')
            .setAuthor(`Ms. Noty's Help`, client.user.displayAvatarURL({dynamic: true}))
            .setColor('#2770D8')

            .setDescription(`<a:arrow:877146642749468702> **Global-Prefix :-** \`<\`\n
            **<a:arrow:877146642749468702> Server-Prefix :-** \`${serverprfix}\`\n
            **<a:arrow:877146642749468702> Version :-** \`5.06\`\n
            `)
            .addField('**Currency :-**', '`Noty(s)`')
            .setTimestamp()
            .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
            .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)
            .addField('<a:question:864476108794626069> | __Who is Ms. Noty?__','Miss Noty **aka** Ms. Noty is a very efficient and optimized moderation bot for your server having every single function an _**epic**_ bot should have, From Fun, Economy, Mod to Music and is coded in a very Optimized manner so that it will become your most loyal friend that can perform many tasks for **YOU**', false)
            .addField(':notepad_spiral: _**Note:-**_', 'Type `help <Category>`, to get extended information about that _Category_')
            .addFields(
                {name: '<a:bot:864486345874866197> **Bot** <a:bot:864486345874866197>', value:'`help bot`', inline: true},
                {name: '<:config:864486346357866516> **Config** <:config:864486346357866516>', value:'`help config`', inline: true},
                {name: '<a:economy:864486354548162590> **Economy** <a:economy:864486354548162590>', value:'`help economy`', inline: true},
                {name: '🖩 **Calculation** 🖩', value:'`help calc`', inline: true},
                {name: '<:fun:864486347015847946> **Fun** <:fun:864486347015847946>', value:'`help fun`', inline: true},
                {name: '<:game:864486347342872586> **Games** <:game:864486347342872586>', value:'`help games`', inline: true},
                {name: '<a:giveaway:864486354426527766> **Giveaway** <a:giveaway:864486354426527766>', value:'`help giveaway`', inline: true},
                {name: '<:mod:864486346910203916> **Moderation** <:mod:864486346910203916>', value:'`help mod`', inline: true},
                {name: '<a:Music:864486351881764874> **Music** <a:Music:864486351881764874>', value:'`help music`', inline: true},
                {name: '<:config:864486346357866516> **Utility** <:config:864486346357866516>', value:'`help utils`', inline: true},
            )

            
            message.reply({embeds: [HelpEmbed], components: [row] }).then(embedMessage => {
              embedMessage.react('<a:fire_69:864853697459650560>');
        })
      }
      else
      //Bot Category Embed
      if(arguments[0].toLowerCase() === "bot")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Bot Category**")
         .setAuthor(`Ms. Noty's Bot Category`, client.user.displayAvatarURL({dynamic: true}))
         .addField('__**Note :-**__','You can use `help <command>` to get more info about that!!')
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty')
         .addFields(
           {name: '<a:arrow:877146642749468702> **Help** <a:bot:864486345874866197>', value: '`help` ,A simple help command', inline: false},
           {name: '<a:arrow:877146642749468702> **Ping** <a:bot:864486345874866197>', value: '`ping` ,Tells the latency of the bot', inline: false},
           {name: '<a:arrow:877146642749468702> **Report** <a:bot:864486345874866197>', value: '`report [issue to report]`, Sends the issue to developer', inline: false},
           {name: '<a:arrow:877146642749468702> **Uptime** <a:bot:864486345874866197>', value: '`uptime` ,gives the total uptime of bot(we provide 99.99% uptime btw!)', inline: false},
           {name: '<a:arrow:877146642749468702> **Botinfo** <a:bot:864486345874866197>', value: '`botinfo` ,Gives information and specification of the bot', inline: false},
           {name: '<a:arrow:877146642749468702> **Invite** <a:bot:864486345874866197>', value: '`invite` ,Sends the option for inviting the bot', inline: false},
         )
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Config Category Embed
      if(arguments[0].toLowerCase() === "config")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Configuration Category**")
         .setAuthor(`Ms. Noty's Configuration Category`, client.user.displayAvatarURL({dynamic: true}))
         .addField('__**Note :-**__','You can use `help <command>` to get more info about that!!')
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty')
         .addFields(
           {name: '<a:arrow:877146642749468702> **Chatbot** <:config:864486346357866516>', value: '`config chatbot` ,Enables a very high profile chatbot to the sent message channel!', inline: false},
           {name: '<a:arrow:877146642749468702> **Anti-Swear** <:config:864486346357866516>', value: '`config antiswear` , Enables a system to delete and warn user if swears', inline: false},
           {name: '<a:arrow:877146642749468702> **Anti-Advertise** <:config:864486346357866516>', value: '`config antiadvertise`, Deletes a discord/dsc.gg based **URL**', inline: false},
           {name: '<a:arrow:877146642749468702> **Anti-Spam** <:config:864486346357866516>', value: '`config antispam` ,Enables a system if mutes the user for 7 minutes if spammed', inline: false},
           {name: '<a:arrow:877146642749468702> **Greet-Event** <:config:864486346357866516>', value: '`config event` , When on it will react to user if sent `hi, hello, good night, etc.`', inline: false},
         )
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Economy Category Embed
      if(arguments[0].toLowerCase() === "economy")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Economy Category**")
         .setAuthor(`Ms. Noty's Economy Category`, client.user.displayAvatarURL({dynamic: true}))
         .addField('__**Note :-**__','You can use `help <command>` to get more info about that!!')
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty')
         .addFields(
           {name: '<a:arrow:877146642749468702> **Balance** 💰', value: '`bal {@user}` , Gives balance information of user if available', inline: false},
           {name: '<a:arrow:877146642749468702> **Beg** 💰', value: '`beg` , Gives the author random amount of Noty(s)', inline: false},
           {name: '<a:arrow:877146642749468702> **Daily** 💰', value: '`daily`,Daily reward system (Can only run once per day)', inline: false},
           {name: '<a:arrow:877146642749468702> **Weekly** 💰', value: '`weekly`,Weekly reward system (Can only run once per week)', inline: false},
           {name: '<a:arrow:877146642749468702> **Monthly** 💰', value: '`monthly`,Monthly reward system (Can only run once per Month)', inline: false},
           {name: '<a:arrow:877146642749468702> **Hourly** 💰', value: '`hourly`,hourly reward system (Can only run once per hourly)', inline: false},
           {name: '<a:arrow:877146642749468702> **Leaderboard** 💰', value: '`lb` ,Gives entire leaderboard of bot (use rob to get leaderboard in a specific server)', inline: false},
           {name: '<a:arrow:877146642749468702> **Pay** 💰', value: '`pay [@user] [amount]` ,Gives the specified amount to the specified user', inline: false},
           {name: '<a:arrow:877146642749468702> **Search** 💰', value: '`search` ,Gives author option to search and earn Noty(s)', inline: false},
           {name: '<a:arrow:877146642749468702> **Steal** 💰', value: '`steal [@user]` ,Steals a random amount of Noty(s)', inline: false},
           {name: '<a:arrow:877146642749468702> **Withdraw** 💰', value: '`wd [amount]` ,Withdraws specific amount of Noty(s)', inline: false},
           {name: '<a:arrow:877146642749468702> **Rob** 💰', value: '`rob`,Gives list of rob-able users in a server', inline: false},
           {name: '<a:arrow:877146642749468702> **Deposit** 💰', value: '`dep [amount]`,deposits the specified amount to bank account', inline: false},
         )
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Giveaway Category Embed
      if(arguments[0].toLowerCase() === "giveaway")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Giveaway Category**")
         .setAuthor(`Ms. Noty's Giveaway Category`, client.user.displayAvatarURL({dynamic: true}))
         .addField('__**Note :-**__','You can use `help <command>` to get more info about that!!')
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty')
         .addFields(
          {name:   '<a:arrow:877146642749468702> **Giveaway End**. <a:giveaway:864486354426527766>' , value: "`gend [giveaway id]` , Ends a running giveaway", inline: false},
          {name:   '<a:arrow:877146642749468702> **Giveaway Start**. <a:giveaway:864486354426527766>' , value: "`gstart [#channel] [time] [type(like m,h or d)] [winners] [prize]` , starts a giveaway", inline: false},
          {name:   '<a:arrow:877146642749468702> **Giveaway List** <a:giveaway:864486354426527766>' , value: "`glist` , lists the current giveaway"},
          {name:   '<a:arrow:877146642749468702> **Giveaway Reroll** <a:giveaway:864486354426527766>' , value: "`greroll [giveaway id]` , rerolls a giveaway", inline: false},
         )
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Fun Category Embed
      if(arguments[0].toLowerCase() === "fun")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Fun Category**")
         .setAuthor(`Ms. Noty's Fun Category`, client.user.displayAvatarURL({dynamic: true}))
         .addField('__**Note :-**__','You can use `help <command>` to get more info about that!!')
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty')
         .addFields(
          {name:   '<a:arrow:877146642749468702> **Slap** <:fun:864486347015847946>' , value: "`slap [@user]` ,slaps the user with funny gifs "},
        {name: '<a:arrow:877146642749468702> **Meme** <:fun:864486347015847946>' , value: "`meme` ,sends a meme"},
        {name:   '<a:arrow:877146642749468702> **Avatar** <:fun:864486347015847946>' , value: "`avatar [@user]` , shows the avatar of the user who's tag is given"},
        {name:   '<a:arrow:877146642749468702> **PrankText** <:fun:864486347015847946>' , value: "`pranktext [text to say]` , sends a text given by the user"},
        {name:   '<a:arrow:877146642749468702> **Snipe** <:fun:864486347015847946>' , value: "`snipe` , snipes the deleted text and sends you"},
         )
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Game Category Embed
      if(arguments[0].toLowerCase() === "games")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Game Category**")
         .setAuthor(`Ms. Noty's Games Category`, client.user.displayAvatarURL({dynamic: true}))
         .addField('__**Note :-**__','You can use `help <command>` to get more info about that!!')
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty')
         .addFields(
          {name:   '<a:arrow:877146642749468702> **Tic Tac Tue / Cross Zero** <:game:864486347342872586>' , value: "`tictactue [@user]` , starts a tic tac tue[zero cross] game which can be played with 2 players "},
          {name:   '<a:arrow:877146642749468702> **Fast Typing Game** <:game:864486347342872586>' , value: "`fasttype` , starts a Fast Typing game, you can score points by writing correct word"},
         )
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Music Category Embed
      if(arguments[0].toLowerCase() === "music")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Music Category**")
         .setAuthor(`Ms. Noty's Music Category`, client.user.displayAvatarURL({dynamic: true}))
         .addField('__**Note :-**__','You can use `help <command>` to get more info about that!!')
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty')
         .addFields(
          {name:   '<a:arrow:877146642749468702> **Play** 🎵' , value: "`play [song name]` , plays a song"},
        {name:   '<a:arrow:877146642749468702> **Stop** 🎵' , value: "`stop` , stop and leaves the channel"},
        {name:   '<a:arrow:877146642749468702> **Loop** 🎵' , value: "`loop` , turns loop mode to onn or off"},
        {name:   '<a:arrow:877146642749468702> **Seek** 🎵' , value: "`seek [time in seconds]` , skipes some second for specified time"},
        {name:   '<a:arrow:877146642749468702> **Filter** 🎵' , value: "`[specific filter]` , changes the filter to specified filter , you can choose filter from(`3d, bassboost, echo, karaoke, nightcore, vaporwave, flanger, gate, haas, reverse, surround, mcompand, phaser, tremolo, earwax`) For example :- <3d will change the filter to 3d music"},
        {name:   '<a:arrow:877146642749468702> **Queue** 🎵' , value: "`queue` , tells the current queue"},
        {name:   '<a:arrow:877146642749468702> **Volume** 🎵' , value: "`volume [percent]` , changes the volume"},
        {name:   '<a:arrow:877146642749468702> **Jump** 🎵' , value: "`jump [queue number]` , jumps to a queue"},
        {name:   '<a:arrow:877146642749468702> **Autoplay** 🎵' , value: "`autoplay` , changes autoplay mode to on or off "},
        {name:   '<a:arrow:877146642749468702> **Pause** 🎵' , value: "`pause` , pauses the video"},
        {name:   '<a:arrow:877146642749468702> **Resume** 🎵' , value: "`resume` , resumes the song"},
        {name:   '<a:arrow:877146642749468702> **Skip** 🎵' , value: "`skip` , skips the current playing song"},
        {name:   '<a:arrow:877146642749468702> **Lyrics** 🎵' , value: "`lyrics [artist name]` , shows the lyrics of current playing song"},
        {name:   '<a:arrow:877146642749468702> **Status** 🎵' , value: "`status` , shows the status of current playing song"},
        {name:   '<a:arrow:877146642749468702> **Nowplaying** 🎵' , value: "`nowplaying` , Shows the current playing song"},
        {name:   '<a:arrow:877146642749468702> **Shuffle** 🎵' , value: "`shuffle` , shuffles the current playlist"},
        {name:   '<a:arrow:877146642749468702> **Playskip** 🎵' , value: "`playskip [song name]` , skips a song and plays another song right away"},
         )
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Mod Category Embed
      if(arguments[0].toLowerCase() === "mod")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Moderation Category**")
         .setAuthor(`Ms. Noty's Mod Category`, client.user.displayAvatarURL({dynamic: true}))
         .addField('__**Note :-**__','You can use `help <command>` to get more info about that!!')
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty')
         .addFields(
          {name:   '<a:arrow:877146642749468702> **Ban** <:mod:864486346910203916>' , value: "`ban [@user] [reason]` , Bans the user permanently"},
          {name:   '<a:arrow:877146642749468702> **Unban** <:mod:864486346910203916>' , value: "`unban [@user]` , Unbans the user if banned"},
          {name:   '<a:arrow:877146642749468702> **Mute** <:mod:864486346910203916>' , value: "`mute [@user] [reason]` , mutes the user permanently"},
          {name:   '<a:arrow:877146642749468702> **Tempmute** <:mod:864486346910203916>' , value: "`tempmute [@user]> [reason]` , mutes the user for specific time"},
          {name:   '<a:arrow:877146642749468702> **Unmute** <:mod:864486346910203916>' , value: "`unmute [@user]` ,Unmutes the user if muted"},
          {name:   '<a:arrow:877146642749468702> **Warn** <:mod:864486346910203916>' , value: "`warn [@user] [reason]` , Warns the user and stores the warn data of user"},
          {name:   '<a:arrow:877146642749468702> **List warns** <:mod:864486346910203916>' , value: "`listwarnings [@user]` , List the previous warns of the user if he/she was warned before"},
          {name:   '<a:arrow:877146642749468702> **CreateMutedRole** <:mod:864486346910203916>' , value: "`createmutedrole` , Creates a muted role if it is not present"},
          {name:   '<a:arrow:877146642749468702> **CreateRole** <:mod:864486346910203916>' , value: "`createrole [colour] [name]` , creates role "},
          {name:   '<a:arrow:877146642749468702> **ClearChannel** <:mod:864486346910203916>' , value: "`clearchannel` , Does bulk delete in messaged channel"},
          {name:   '<a:arrow:877146642749468702> **Invites** <:mod:864486346910203916>' , value: "`invites` , shows the all inviters of a server"},
         )
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Utility Category Embed
      if(arguments[0].toLowerCase() === "utils")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Utility Category**")
         .setAuthor(`Ms. Noty's utils Category`, client.user.displayAvatarURL({dynamic: true}))
         .addField('__**Note :-**__','You can use `help <command>` to get more info about that!!')
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty')
         .addFields(
          {name:   '<a:arrow:877146642749468702> **Poll** <:config:864486346357866516>' , value: "`poll [channel] [description]` sends a poll to specified channel"},
        {name:   '<a:arrow:877146642749468702> **Serverinfo** <:config:864486346357866516>' , value: "`serverinfo` sends every info you should know about a server"},
        {name:   '<a:arrow:877146642749468702> **Userinfo** <:config:864486346357866516>' , value: "`userinfo {user}` sends every info you should know about a user"},
         )
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Utility Category Embed
      if(arguments[0].toLowerCase() === "calc")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Calculation Category**")
         .setAuthor(`Ms. Noty's Calc Category`, client.user.displayAvatarURL({dynamic: true}))
         .addField('__**Note :-**__','You can use `help <command>` to get more info about that!!')
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty')
         .addFields(
          {name:   '<a:arrow:877146642749468702> **Add** 🖩' , value: "`add [number] . . . . . [numbers]` , adds 2 or more than 2 number with spaces"},
          {name:   '<a:arrow:877146642749468702> **Subract** 🖩' , value: "`sub [number] . . . . . [numbers]` , subtracts 2 or more than 2 number with spaces"},
          {name:   '<a:arrow:877146642749468702> **Multiply** 🖩' , value: "`mult [number] . . . . . [numbers]`, multiply 2 or more than 2 number with spaces"},
          {name:   '<a:arrow:877146642749468702> **Divide** 🖩' , value: "`div [number] . . . . . [numbers]` , divides  2 or more than 2 number with spaces"},
          {name:   '<a:arrow:877146642749468702> **Cube** 🖩' , value: "`cu [number]` , finds the cube of given number"},
          {name:   '<a:arrow:877146642749468702> **CubeRoot** 🖩' , value: "`cbrt [number]` , finds the cube root of given number"},
          {name:   '<a:arrow:877146642749468702> **Square** 🖩' , value: "`sq [number]` , finds the square of given number"},
          {name:   '<a:arrow:877146642749468702> **SquareRoot** 🖩' , value: "`sqrt [number]` , finds the square root of given number"},
          {name:   '<a:arrow:877146642749468702> **Percent** 🖩' , value: "`per [total amount] [amount]` , finds the percent of the givenm amount "},
         )
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Help Command Embed
      if(arguments[0].toLowerCase() === "help")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Help Command**")
         .setAuthor(`Ms. Noty's Help Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"A complete help and Documentation to use the bot and reach it's full `POWER`")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`help {category/command}`")
         .addField('**__Example :-__**', '`help mod(mod is a category)` , `help ban(ban is a command)`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      // Ping Command Embed
      if(arguments[0].toLowerCase() === "ping")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Ping Command**")
         .setAuthor(`Ms. Noty's Ping Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Tells both the latency of bot as a interaction and ping as a api")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`ping`")
         .addField('**__Example :-__**', '`ping`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Report Command Embed
      if(arguments[0].toLowerCase() === "report")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Report Command**")
         .setAuthor(`Ms. Noty's Report Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Reports the given bug/issue to the developer team")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`report [bug/issue]`")
         .addField('**_Alias :-_**',"**bugreport**")
         .addField('**__Example :-__**', '`report ping is high`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Uptime Command Embed
      if(arguments[0].toLowerCase() === "uptime")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Uptime Command**")
         .setAuthor(`Ms. Noty's Uptime Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"sends the total uptime of the bot since last restart/update")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`uptime`")
         .addField('**_Alias :-_**',"**update**")
         .addField('**__Example :-__**', '`uptime`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //About Command Embed
      if(arguments[0].toLowerCase() === "botinfo")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Bot-Information Command**")
         .setAuthor(`Ms. Noty's botinfo Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Tells the specification like uptime, ping, and other things in one command!")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`botinfo`")
         .addField('**__Example :-__**', '`botinfo`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Invite Command Embed
      if(arguments[0].toLowerCase() === "invite")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Invite Command**")
         .setAuthor(`Ms. Noty's Invite Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Sends a embed about inviting the bot")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`invite`")
         .addField('**__Example :-__**', '`invite`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //balance Command Embed
      if(arguments[0].toLowerCase() === "balance")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Balance Command**")
         .setAuthor(`Ms. Noty's Balance Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Gives balance information of user if available")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`balance`")
         .addField('**_Alias :-_**',"**bal**")
         .addField('**__Example :-__**', '`bal @user`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //beg Command Embed
      if(arguments[0].toLowerCase() === "beg")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Beg Command**")
         .setAuthor(`Ms. Noty's beg Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Gives the author random amount of Noty(s)")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`beg`")
         .addField('**__Example :-__**', '`beg`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Daily Command Embed
      if(arguments[0].toLowerCase() === "daily")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Daily Command**")
         .setAuthor(`Ms. Noty's Daily Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Daily reward system (Can only run once per day)")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`daily`")
         .addField('**__Example :-__**', '`daily`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //hourly Command Embed
      if(arguments[0].toLowerCase() === "hourly")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Hourly Command**")
         .setAuthor(`Ms. Noty's Hourly Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Hourly reward system (Can only run once per hour)")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`hourly`")
         .addField('**__Example :-__**', '`hourly`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //weekly Command Embed
      if(arguments[0].toLowerCase() === "weekly")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Weekly Command**")
         .setAuthor(`Ms. Noty's Weekly Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Weekly reward system (Can only run once per week)")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`weekly`")
         .addField('**__Example :-__**', '`weekly`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //monthly Command Embed
      if(arguments[0].toLowerCase() === "monthly")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Monthly Command**")
         .setAuthor(`Ms. Noty's Monthly Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Monthly reward system (Can only run once per month)")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`monthly`")
         .addField('**__Example :-__**', '`monthly`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //pay Command Embed
      if(arguments[0].toLowerCase() === "pay")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Pay Command**")
         .setAuthor(`Ms. Noty's Pay Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Gives the specified amount to the specified user")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`pay [@user] [amount]`")
         .addField('**_Alias :-_**',"**give**")
         .addField('**__Example :-__**', '`pay @user 1000`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //balance Command Embed
      if(arguments[0].toLowerCase() === "leaderboard")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**LeaderBoard Command**")
         .setAuthor(`Ms. Noty's LeaderBoard Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Gives entire leaderboard of bot")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`leaderboard`")
         .addField('**_Alias :-_**',"**lb**")
         .addField('**__Example :-__**', '`lb`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //steal Command Embed
      if(arguments[0].toLowerCase() === "steal")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Steal Command**")
         .setAuthor(`Ms. Noty's Steal Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Steals a random amount of Noty(s) from specified user")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`steal [@user]`")
         .addField('**__Example :-__**', '`steal @user`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //search Command Embed
      if(arguments[0].toLowerCase() === "search")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Search Command**")
         .setAuthor(`Ms. Noty's Search Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Gives author option to search and earn Noty(s)")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`search`")
         .addField('**__Example :-__**', '`search`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //rob Command Embed
      if(arguments[0].toLowerCase() === "rob")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Rob Command**")
         .setAuthor(`Ms. Noty's Rob Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Gives list of rob-able users in a server")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`rob`")
         .addField('**__Example :-__**', '`rob`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //withdraw Command Embed
      if(arguments[0].toLowerCase() === "withdraw")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Withdraw Command**")
         .setAuthor(`Ms. Noty's Withdraw Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Withdraws specific amount of Noty(s)")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`withdraw [amount]`")
         .addField('**_Alias :-_**',"**wd**")
         .addField('**__Example :-__**', '`wd 100`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //withdraw Command Embed
      if(arguments[0].toLowerCase() === "deposit")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Deposit Command**")
         .setAuthor(`Ms. Noty's Deposit Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"deposits the specified amount to bank account")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`deposit [amount]`")
         .addField('**_Alias :-_**',"**dep**")
         .addField('**__Example :-__**', '`dep 100`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //slap Command Embed
      if(arguments[0].toLowerCase() === "slap")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Slap Command**")
         .setAuthor(`Ms. Noty's SLap Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"slaps the user with funny gifs")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`slap [@user]`")
         .addField('**__Example :-__**', '`slap @user`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //meme Command Embed
      if(arguments[0].toLowerCase() === "meme")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Meme Command**")
         .setAuthor(`Ms. Noty's Meme Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"sends a meme")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`meme`")
         .addField('**__Example :-__**', '`meme`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //pranktest Command Embed
      if(arguments[0].toLowerCase() === "pranktext")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**PrankText Command**")
         .setAuthor(`Ms. Noty's PrankText Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"sends a text given by the user")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`pranktext [text to say]`")
         .addField('**__Example :-__**', '`pranktext Hillo!!`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //snipe Command Embed
      if(arguments[0].toLowerCase() === "snipe")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Snipe Command**")
         .setAuthor(`Ms. Noty's Snipe Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"snipes the deleted text and sends you")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`snipe`")
         .addField('**__Example :-__**', '`snipe`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //withdraw Command Embed
      if(arguments[0].toLowerCase() === "avatar")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Avatar Command**")
         .setAuthor(`Ms. Noty's Avatar Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"shows the avatar of the user who's tag is given is given")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`avatar [@user]`")
         .addField('**_Alias :-_**',"**av**")
         .addField('**__Example :-__**', '`av @user`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //ttt Command Embed
      if(arguments[0].toLowerCase() === "tictactue")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Tic Tac Tue Command**")
         .setAuthor(`Ms. Noty's Zero-Cross Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"starts a tic tac tue[zero cross] game which can be played with 2 players")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`tictactue [@user]`")
         .addField('**_Alias :-_**',"**ttt**, **zerocross**, **zc**")
         .addField('**__Example :-__**', '`zc @user`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //ttt Command Embed
      if(arguments[0].toLowerCase() === "fasttype")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Fast Type Command**")
         .setAuthor(`Ms. Noty's Fast-Type Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"starts a Fast Typing game, you can score points by writing correct word")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`fasttype`")
         .addField('**_Alias :-_**',"**ft**")
         .addField('**__Example :-__**', '`fasttype`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //gstart Command Embed
      if(arguments[0].toLowerCase() === "gtart")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Gstart Command**")
         .setAuthor(`Ms. Noty's Giveaway-Start Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"starts a giveaway")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`gstart [#channel] [time] [type(like m,h or d)] [winners] [prize]`")
         .addField('**__Example :-__**', '`gstart #channel 10 d 3 nitro`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //gend Command Embed
      if(arguments[0].toLowerCase() === "gend")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Gend Command**")
         .setAuthor(`Ms. Noty's Giveaway-End Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Ends a running giveaway")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`gend [giveaway id]`")
         .addField('**__Example :-__**', '`gend 774225512373551115`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //gend Command Embed
      if(arguments[0].toLowerCase() === "glist")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Glist Command**")
         .setAuthor(`Ms. Noty's Giveaway-List Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"lists the current giveaway")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`glist`")
         .addField('**__Example :-__**', '`glist`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //greroll Command Embed
      if(arguments[0].toLowerCase() === "greroll")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Greroll Command**")
         .setAuthor(`Ms. Noty's Giveaway-Reroll Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"lists the current giveawarerolls a giveaway")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`greroll [giveaway id]`")
         .addField('**__Example :-__**', '`greroll 774225512373551115`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //greroll Command Embed
      if(arguments[0].toLowerCase() === "serverinfo")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Server-Info Command**")
         .setAuthor(`Ms. Noty's Server-Info Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"sends every info you should know about a server")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`serverinfo`")
         .addField('**__Example :-__**', '`serverinfo`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //greroll Command Embed
      if(arguments[0].toLowerCase() === "userinfo")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**User-Info Command**")
         .setAuthor(`Ms. Noty's User-Info Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"sends every info you should know about a user")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`userinfo {@user}`")
         .addField('**__Example :-__**', '`userinfo @user`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //greroll Command Embed
      if(arguments[0].toLowerCase() === "poll")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Poll Command**")
         .setAuthor(`Ms. Noty's Poll Command`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"sends a poll to specified channel")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`poll [#channel] [description]`")
         .addField('**__Example :-__**', '`poll #channel test poll!!`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Feature Category Embed
      if(arguments[0].toLowerCase() === "chatbot")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Chatbot Feature**")
         .setAuthor(`Ms. Noty's Chatbot Feature`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Enables a high profile chatbot in ran channel")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`config chatbot`")
         .addField('**__Example :-__**', '`config chatbot`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Feature Category Embed
      if(arguments[0].toLowerCase() === "antiswear")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Anti-Swear Feature**")
         .setAuthor(`Ms. Noty's Anti-Swear Feature`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Enables a system to delete and warn user if swears")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`config antiswear`")
         .addField('**__Example :-__**', '`config antiswear`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Feature Category Embed
      if(arguments[0].toLowerCase() === "antiadvertise")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Anti-Advertise Feature**")
         .setAuthor(`Ms. Noty's Anti-Advertise Feature`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**'," Deletes a discord/dsc.gg based URL")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`config antiadvertise`")
         .addField('**__Example :-__**', '`config antiadvertise`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Feature Category Embed
      if(arguments[0].toLowerCase() === "antispam")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Anti-Spam Feature**")
         .setAuthor(`Ms. Noty's Anti-Spam Feature`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"Enables a system if mutes the user for 7 minutes if spammed")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`config antispam`")
         .addField('**__Example :-__**', '`config antispam`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
      else
      //Feature Category Embed
      if(arguments[0].toLowerCase() === "event")
      {
         var botEmbed = new MessageEmbed()
         .setTitle("**Greet-Event Feature**")
         .setAuthor(`Ms. Noty's Greet-Event Feature`, client.user.displayAvatarURL({dynamic: true}))
         .addField('**Description**',"When on it will react to user if sent `hi, hello, good night, etc.`")
         .addField('__**Note :-**__','Words given in **[]** are **Mandatory** arguments and words given in **{}** are arguments but not **Mandatory** and can be left empty!!')
         .addField('**_Usage :-_**',"`config event`")
         .addField('**__Example :-__**', '`config event`')
         .setColor('#2770D8')
         .setTimestamp()
          .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
          .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)

          message.reply({embeds: [botEmbed]}).then(embedMessage => {
            embedMessage.react('<a:fire_69:864853697459650560>');
      })
            
      }
  },
}*/