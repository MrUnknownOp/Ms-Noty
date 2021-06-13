const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Developer = "MR. UNKNOWN OP#3635"

module.exports = {
    commands: ['uptime','update'],
    minArgs: 0,
    maxArgs: 0,
  
    callback: (message, arguments, text, client) => {
    
    let days = Math.floor(client.uptime / 86400000 );
    let hours = Math.floor(client.uptime / 3600000 ) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    
    let upembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`My Uptime is **${days}d ${hours}h ${minutes}m ${seconds}s**`)
    .setFooter(`Made by ${Developer}`, client.user.displayAvatarURL());
    
    message.channel.send(upembed)
    }
  
}