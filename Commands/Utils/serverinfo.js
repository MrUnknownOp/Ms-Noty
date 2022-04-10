const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
	brazil: 'Brazil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydeny: 'Sydeny',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

module.exports = {
    name: 'serverinfo',
	aliases:['si'],
	slash:'both',
	category:'Utils',
	testOnly:true,
	description:'an advance server info command',
    callback: async({message, interaction}) => {

		if(message)
		{

			const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
			const channels = message.guild.channels.cache;
			const emojis = message.guild.emojis.cache;

			const embed = new MessageEmbed()
				.setDescription(`**Server information of __${message.guild.name}__**`)
				.setColor('RANDOM')
				.setThumbnail(message.guild.iconURL({ dynamic: true }))
				.setDescription(`**General**
					**❯ Name:** ${message.guild.name},
					**❯ ID:** ${message.guild.id},
					**❯ Owner:** <@${message.guild.ownerId}> (${message.guild.ownerId}),
					**❯ Region:** ${regions[message.guild.region]},
					**❯ Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'},
					**❯ Verification Level:** ${verificationLevels[message.guild.verificationLevel]},
					**❯ Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()},
					\u200b
				**Statistics**
					**❯ Role Count:** ${roles.length},
					**❯ Emoji Count:** ${emojis.size},
					**❯ Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size},
					**❯ Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size},
					**❯ Member Count:** ${message.guild.memberCount},
					**❯ Text Channels:** ${channels.filter(channel => channel.type === 'text').size},
					**❯ Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size},
					**❯ Boost Count:** ${message.guild.premiumSubscriptionCount || '0'},
					\u200b`
				)
				.addField(`Total Roles `,`${roles.length - 1}`)
				.setTimestamp();
			message.reply({embeds:[embed]})
		} else if(interaction)
		{
			const roles = interaction.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
			const members = interaction.guild.members.cache;
			const channels = interaction.guild.channels.cache;
			const emojis = interaction.guild.emojis.cache;

			const embed = new MessageEmbed()
				.setDescription(`**Server information of __${interaction.guild.name}__**`)
				.setColor('RANDOM')
				.setThumbnail(interaction.guild.iconURL({ dynamic: true }))
				.setDescription(`**General**
					**❯ Name:** ${interaction.guild.name},
					**❯ ID:** ${interaction.guild.id},
					**❯ Owner:** <@${interaction.guild.ownerId}> (${interaction.guild.ownerId}),
					**❯ Region:** ${regions[interaction.guild.region]},
					**❯ Boost Tier:** ${interaction.guild.premiumTier ? `Tier ${interaction.guild.premiumTier}` : 'None'},
					**❯ Verification Level:** ${verificationLevels[interaction.guild.verificationLevel]},
					**❯ Time Created:** ${moment(interaction.guild.createdTimestamp).format('LT')} ${moment(interaction.guild.createdTimestamp).format('LL')} ${moment(interaction.guild.createdTimestamp).fromNow()},
					\u200b
				**Statistics**
					**❯ Role Count:** ${roles.length},
					**❯ Emoji Count:** ${emojis.size},
					**❯ Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size},
					**❯ Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size},
					**❯ Member Count:** ${interaction.guild.memberCount},
					**❯ Text Channels:** ${channels.filter(channel => channel.type === 'text').size},
					**❯ Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size},
					**❯ Boost Count:** ${interaction.guild.premiumSubscriptionCount || '0'},
					\u200b`
				)
				
				.addField(`Total Roles `,`${roles.length - 1}`)
				.setTimestamp();
			interaction.reply({embeds:[embed]})
		}

    }
		
}