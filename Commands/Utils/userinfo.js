const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

module.exports = {
    name: 'userinfo',
	aliases:['whois', 'ui'],
    expectedArgs: '[usertag]',
    minArgs: 0,
    maxArgs: 1,
	slash: 'both',
	testOnly: true,
	category: 'Utils',
	description:'An advance user info system',
    callback: async({message,interaction, args}) => {
		if(message)
		{
			const member = message.mentions.members.first() || message.member;
			const roles = member.roles.cache
				.sort((a, b) => b.position - a.position)
				.map(role => role.toString())
				.slice(0, -1);
			const userFlags = member.user.flags.toArray();
			const embed = new MessageEmbed()
				.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
				.setColor(member.displayHexColor || 'BLUE')
				.setDescription(`User
					**❯ Username:** ${member.user.username},
					**❯ Discriminator:** ${member.user.discriminator},
					**❯ ID:** ${member.id},
					**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'},
					**❯ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })}),
					**❯ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()},
					\u200b
				
				Member
					**❯ Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name},
					**❯ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')},
					**❯ Roles** [${roles.length}],
					\u200b`
				)
			return message.reply({embeds:[embed]})
		}else if (interaction) {
			
			let Member = args.toString()
			let member = await interaction.guild.members.cache.get(Member)
			let roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);
			let userFlags = member.user.flags.toArray();
			await interaction.deferReply();
				const embed = new MessageEmbed()
					.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
					.setColor(member.user.displayHexColor || 'BLUE')
					.setDescription(`User
						**❯ Username:** ${member.user.username},
						**❯ Discriminator:** ${member.user.discriminator},
						**❯ ID:** ${member.id},
						**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'},
						**❯ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })}),
						**❯ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()},
						\u200b
					
					Member
						**❯ Highest Role:** ${member.roles.highest.id === interaction.guild.id ? 'None' : member.roles.highest.name},
						**❯ Server Join Date:** ${moment(member.user.joinedAt).format('LL LTS')},
						**❯ Roles** [${roles.length}],
						\u200b`
					)
				await interaction.followUp({embeds: [embed]});
		}
	}

};