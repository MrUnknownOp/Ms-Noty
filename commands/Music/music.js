const config = require('../../config.json')
const disTube = require('distube');
const Discord = require('discord.js')



module.exports = (client)=>{

     //= new disTube(client, { searchSongs: false, emitNewSongOnly: true });
     client.distube  = new disTube(client, {
        youtubeCookie: "",
        searchSongs: false, 
        emitNewSongOnly: true, 
        highWaterMark: 1 << 25, 
        leaveOnEmpty: true, 
        leaveOnFinish: false, 
        leaveOnStop: true,
    })

    client.on('message' , async (msg) => {

  
        if(msg.author == client.user)
        {
            return;
        }
    
        if(msg.channel.type == 'dm')
        {
          return;
        }
    
    
        
      
    
        //commands
        if(msg.content.startsWith(config.prefix))
        {
            processing(msg , client);
        }
    })

    async function processing(msg,client) {
        let fullCommand = msg.content.substr(1);
        let splitCommand = fullCommand.split(" ");
        let Command = splitCommand[0];
        let arguments = splitCommand.slice(1);

        

        if (Command.toLowerCase() == "play" || Command.toLowerCase() == "p" ) {

            try {
                if (!msg.member.voice.channel) return msg.channel.send('You must be in a voice channel to use this command.');
                if (arguments.length < 1) return msg.channel.send(`${msg.author} Plaese specify a song to play`)
                const music = arguments.join(" ");
                client.distube.play(msg, music)
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
            }

            

        } else if (Command.toLowerCase() == "stop" || Command.toLowerCase() == "s" || Command.toLowerCase() == "leave") {

            try {
                if (!msg.member.voice.channel) return msg.channel.send('You must be in a voice channel to use this command.');
            let queue = client.distube.getQueue(msg);
            if(queue) {

                client.distube.stop(msg);
                embedbuilder(client, msg, "BLACK", "Stopped!!", ":thumbsup: ")
                

            } else if (!queue) {

                return

            };
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
            }

            
        } else if (Command.toLowerCase() == "status") {
            try {
                let queue = client.distube.getQueue(msg);
            if (!queue) return embedbuilder(client, msg, "RED", "There is nothing playing!").then(msg => msg.delete({timeout: 5000}).catch(console.error));
           
                const status = `Volume: \`${queue.volume}\` | Filter: \`${queue.filter || "❌"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``
                return embedbuilder(client, msg, "#fffff0", "Current status:", status)
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
            }
            
        }else if (Command.toLowerCase() == "skip"){

           if (!msg.member.voice.channel) return msg.channel.send('You must be in a voice channel to use this command.');

           try {
            let queue =  client.distube.getQueue(msg);

            if(queue) {
                

                
                    client.distube.skip(msg)
                    embedbuilder(client, msg, "BLACK", "Song Skipped!!", ":thumbsup: ")
                   
            } else if (!queue) {
                return
            };

           } catch (err) {
            embedbuilder(client, msg, "RED", "Error", err)
           }
            
        } else if (Command.toLowerCase() == "autoplay" || Command.toLowerCase() == "ap") {

            if (!msg.member.voice.channel) return msg.channel.send('You must be in a voice channel to use this command.');
            try {
                let mode = client.distube.toggleAutoplay(msg);
                //msg.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off") + "`");
                embedbuilder(client, msg, "BLUE", "Autoplay mode changed",(mode ? "On" : "Off") )
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
            }
            

        } else if (Command.toLowerCase() == "volume" || Command.toLowerCase() == "vol") {

           if (!msg.member.voice.channel) return msg.channel.send('You must be in a voice channel to use this command.');
            //if(arguments > 100) return msg.channel.send(`Really you want to harm your ears  ${msg.author}`);
            try {
                client.distube.setVolume(msg, arguments[0]);
            embedbuilder(client, msg, "RED", "Volume Changed", `Volume has been changed to ${arguments[0]}`)
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
            }
            

        } else if (Command.toLowerCase() == "repeat" || Command.toLowerCase() == "r" || Command.toLowerCase() == "loop" || Command.toLowerCase() == "l") {
            if (!msg.member.voice.channel) return msg.channel.send(`${msg.author}, You must be in a voice channel to use this command.`);
            try {
                let repeatmode = client.distube.setRepeatMode(msg, parseInt(arguments[0]));
                embedbuilder(client, msg, "YELLOW", "Changed Repeat Mode", repeatmode)
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
            }
           
            

        } else if (Command.toLowerCase() == "queue" || Command.toLowerCase() == "q") {
            if (!msg.member.voice.channel) return msg.channel.send(`${msg.author}, You must be in a voice channel to use this command.`);
                try {
                    let queue = client.distube.getQueue(msg);
                let curqueue = queue.songs.map((song, id) =>
                `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
                ).join("\n");
                return  embedbuilder(client, msg, "GREEN", "Current Queue!", curqueue)
                } catch (err) {
                    embedbuilder(client, msg, "RED", "Error", err)
                }
                

        }else if (Command.toLowerCase() == "3d" || Command == "bassboost" || Command == "echo" || Command == "karaoke" || Command == "nightcore" || Command == "vaporwave" || Command == "flanger" || Command == "gate" || Command == "haas" || Command == "reverse" || Command == "surround" || Command == "mcompand" || Command == "phaser" || Command == "tremolo" || Command == "earwax")
        {
            try {
                if (!msg.member.voice.channel) return msg.channel.send(`${msg.author}, You must be in a voice channel to use this command.`);
            const queue = client.distube.getQueue(msg)
            if (!queue) return embedbuilder(client, msg, "RED", "Error!", `${msg.author}, There is nothing in the queue right now!`)
            let filter = client.distube.setFilter(msg , Command);
            embedbuilder(client, msg, "GREEN", "Filter changed", `Current queue filter:  + ${(filter || "Off")}`)
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
            }

            

        } else if (Command.toLowerCase() == "jump" || Command.toLowerCase() == "j") {
            try {
                client.distube.jump(msg, parseInt(arguments[0]))
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
            }
           
           
            
        } else if (Command.toLowerCase() == "seek")
        {
            if (!msg.member.voice.channel) return msg.channel.send(`${msg.author}, You must be in a voice channel to use this command.`);
            try {
                client.distube.seek(msg, Number(arguments[0]*1000));
                embedbuilder(client, msg, "GREEN", "Seeked!", `seeked the song for \`${arguments[0]} seconds\``)
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
            }
           
            
        } else if (Command.toLowerCase() == "np" || Command.toLowerCase() === "nowplaying") {
            
                let queue = client.distube.getQueue(msg);
                if (!queue) return embedbuilder(client, msg, "RED", "There is nothing playing!").then(msg => msg.delete({timeout: 5000}).catch(console.error));
            try {
                let cursong = queue.songs[0];
    
                return embedbuilder(client, msg, "#fffff0", "Current Song!", `[${cursong.name}](${cursong.url})\n\nPlaying for: \`${(Math.floor(queue.currentTime / 1000 / 60 * 100) / 100).toString().replace(".", ":")} Minutes\`\n\nDuration: \`${cursong.formattedDuration}\``, cursong.thumbnail)
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
            }
           
        }
        else if (Command.toLowerCase()  == "pause") {
            try {
                embedbuilder(client, msg, "#fffff0", "Paused!")
                return client.distube.pause(msg);
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
            }
            
        }
        else if (Command.toLowerCase() == "resume") {
            try {
                embedbuilder(client, msg, "#fffff0", "Resume!")
                return client.distube.resume(msg);
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
            }
            
        }
        else if (Command.toLowerCase() == "shuffle" || Command.toLowerCase() == "mix") {
            try {
                embedbuilder(client, msg, "#fffff0", "Shuffled!")
                return client.distube.shuffle(msg);
            
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
            }
            
        } else if (Command.toLowerCase() == "playskip" || Command.toLowerCase() == "ps") {
            embedbuilder(client, msg, "#fffff0", "Searching and Skipping!", arguments.join(" "))
            try {
                return client.distube.playSkip(msg, arguments.join(" "));
            } catch (err) {
                embedbuilder(client, msg, "RED", "Error", err)
                
            }
           
        }
       
        
        
    }
    const status = (queue) => `Volume: \`${queue.volume}\` | Filter: \`${queue.filter || "OFF"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``
    //distube
    client.distube
         .on("playSong", (msg, queue, song) => {
            embedbuilder(client, msg, "GREEN", "Playing new Song!", `Song: \`${song.name}\`  -  \`${song.formattedDuration}\` \n\nRequested by: ${song.user}\n${status(queue)}`)
         })
         .on("addSong", (msg, queue, song) => {
            embedbuilder(client, msg, "GREEN", "Added a Song!", `Song: \`${song.name}\`  -  \`${song.formattedDuration}\` \n\nRequested by: ${song.user}`)
         })
         .on("playList", (msg, queue, playlist, song) => {
            embedbuilder(client, msg, "GREEN", "Playling playlist", `Playlist: \`${playlist.title}\`  -  \`${playlist.total_items} songs\` \n\nRequested by: ${song.user}\n\nstarting playing Song: \`${song.name}\`  -  \`${song.formattedDuration}\`\n${status(queue)}`)
         })
         .on("addList", (msg, queue, song) => {
            embedbuilder(client, msg, "GREEN", "Added a Playling!", `Playlist: \`${playlist.title}\`  -  \`${playlist.total_items} songs\` \n\nRequested by: ${song.user}`)
         })
         .on("searchResult", (msg, result) => {
            let i = 0;
            embedbuilder(client, msg, "YELLOW", "", `**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`)
        })
         // DisTubeOptions.searchSongs = true
         .on("searchCancel", (msg) =>  embedbuilder(client, msg, "RED", `Searching canceled`, "")
         )
         .on("empty", msg => {

            try{   return embedbuilder(client, msg, "RED", "Left the channel cause it got empty!").then(msg => msg.delete({ timeout: 5000 }).catch(console.error))
        }catch (error){
            console.error
         }
        })
        .on("noRelated", msg => {
            try{    return embedbuilder(client, msg, "RED", "Can't find related video to play. Stop playing music.").then(msg => msg.delete({ timeout: 5000 }).catch(console.error))
        }catch (error){
            console.error
         }
        })
        .on("initQueue", queue => {
            try{   queue.autoplay = false;
            queue.volume = 100;
            queue.filter = filters[5];
        }catch (error){
            console.error
         }
        })
         .on("error", (msg, err) => embedbuilder(client, msg, "RED", "An error encountered:", err)
         );
        
         
    
        //function embeds
        //embedbuilder(client, msg, "RED", "TITEL", "DESCRIPTION")
        function embedbuilder(client, msg, color, title, description){
            let embed = new Discord.MessageEmbed()
            .setColor(color)
            .setFooter(client.user.username, client.user.displayAvatarURL());
            if(title) embed.setTitle(title);
            if(description) embed.setDescription(description);
            return msg.channel.send(embed);
        }
}
