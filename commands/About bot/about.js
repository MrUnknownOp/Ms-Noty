const { MessageEmbed, version: djsversion } = require('discord.js');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms')
const developer = '𝙈𝙍. 𝙐𝙉𝙆𝙉𝙊𝙒𝙉#6969'

module.exports = {
    commands: 'botinfo',
    minArgs: 0,
    maxArgs: 0,
  
    callback: (message, arguments, text, client) => {

        function formatBytes(bytes) {
            if (bytes === 0) return '0 Bytes';
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            const i = Math.floor(Math.log(bytes) / Math.log(1024));
            return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
        }
        const core = os.cpus()[0];
		const embed = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
        .setAuthor(`About me`, client.user.displayAvatarURL({dynamic: true}))
        .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)
			.setColor(message.guild.me.displayHexColor || 'BLUE')
			.addField('General', [
				`<a:arrow:877146642749468702> ** Client:** ${client.user.tag}`,
				`<a:arrow:877146642749468702> ** Servers:** ${client.guilds.cache.size} `,
				`<a:arrow:877146642749468702> ** Users:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`,
				`<a:arrow:877146642749468702> ** Channels:** ${client.channels.cache.size}`,
				`<a:arrow:877146642749468702> ** Creation Date:** ${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
				`<a:arrow:877146642749468702> ** Node.js:** ${process.version}`,
				`<a:arrow:877146642749468702> ** Version:** v5.10`,
				`<a:arrow:877146642749468702> ** Discord.js:** v${djsversion}`,
				'\u200b'
			])
			.addField('System', [
				`<a:arrow:877146642749468702> ** Platform:** ${process.platform}`,
				`<a:arrow:877146642749468702> ** Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
				`<a:arrow:877146642749468702> ** CPU:**`,
				`\u3000 <a:arrow:877146642749468702> Cores: ${os.cpus().length}`,
				`\u3000 <a:arrow:877146642749468702> Model: ${core.model}`,
				`\u3000 <a:arrow:877146642749468702> Speed: ${core.speed}MHz`,
				`<a:arrow:877146642749468702> ** Memory:**`,
				`\u3000 <a:arrow:877146642749468702> Total: ${formatBytes(process.memoryUsage().heapTotal)}`,
				`\u3000 <a:arrow:877146642749468702> Used: ${formatBytes(process.memoryUsage().heapUsed)}`
			])
			.setTimestamp();

		message.channel.send(embed);
        
    }
}
