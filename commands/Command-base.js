const { MessageEmbed } = require('discord.js');
const { prefix } = require('../config.json')


const validatePermissions = (permissions) => {
  const validPermissions = [
    'CREATE_INSTANT_INVITE',
    'KICK_MEMBERS',
    'BAN_MEMBERS',
    'ADMINISTRATOR',
    'MANAGE_CHANNELS',
    'MANAGE_GUILD',
    'ADD_REACTIONS',
    'VIEW_AUDIT_LOG',
    'PRIORITY_SPEAKER',
    'STREAM',
    'VIEW_CHANNEL',
    'SEND_MESSAGES',
    'SEND_TTS_MESSAGES',
    'MANAGE_MESSAGES',
    'EMBED_LINKS',
    'ATTACH_FILES',
    'READ_MESSAGE_HISTORY',
    'MENTION_EVERYONE',
    'USE_EXTERNAL_EMOJIS',
    'VIEW_GUILD_INSIGHTS',
    'CONNECT',
    'SPEAK',
    'MUTE_MEMBERS',
    'DEAFEN_MEMBERS',
    'MOVE_MEMBERS',
    'USE_VAD',
    'CHANGE_NICKNAME',
    'MANAGE_NICKNAMES',
    'MANAGE_ROLES',
    'MANAGE_WEBHOOKS',
    'MANAGE_EMOJIS',
  ]

  for (const permission of permissions) {
    if (!validPermissions.includes(permission)) {
      console.log(`Unknown permission node "${permission}"`);
    }
  }
}

let recentlyRan = [] // guildId-userId-command

const allCommands = {};

module.exports = async(commandOptions) => {
  let {
    commands,
    permissions = [],
  } = commandOptions

  if(!commands)
  {
    return
  }

  // Ensure the command and aliases are in an array
  if (typeof commands === 'string') {
    commands = [commands]
  }
  console.log(`Registering command "${commands[0]}"`)



  // Ensure the permissions are in an array and are all valid
  if (permissions.length) {
    if (typeof permissions === 'string') {
      permissions = [permissions]
    }

    validatePermissions(permissions)
  }   


  for (const command of commands)
  {
    allCommands[command] = {
      ...commandOptions,
      commands,
      permissions
    } 
  }
}



module.exports.listen = (client) => {

  const profileModel = require('../schemas/profile-schema')

  // Listen for messages
  client.on('message', async(message) => {
    const { member, content, guild, channel } = message

    // Split on any number of spaces
    const arguments = content.split(/[ ]+/)

    // Remove the command which is the first index
    const name = arguments.shift().toLowerCase();

    if(name.startsWith(prefix))
    {
      const command = allCommands[name.replace(prefix, '')]
      if(!command)
      {
        return
      }

      let profileData;
        try {
          profileData = await profileModel.findOne({ userID: message.author.id });
          if (!profileData) {
            let profile = await profileModel.create({
              userID: message.author.id,
              lb: "all",
              coins: 1000,
              bank: 0,
              Space: 1000,
            });
            profile.save();
          }
        } catch (err) {
          console.log(err);
        }

      const {
        expectedArgs = '',
        permissionError = 'You do not have permission to run this command.',
        minArgs = 0,
        maxArgs = null,
        cooldown = -1,
        cooldownmsg = 'You cannot use that command so soon, please wait for',
        permissions,
        requiredRoles = [],
        callback,
      } = command;

      const developer = '𝙈𝙍. 𝙐𝙉𝙆𝙉𝙊𝙒𝙉#6969'
      
      
        // Ensure the user has the required permissions
        for (const permission of permissions) {
          if (!member.hasPermission(permission)) {

            const permembed = new MessageEmbed()
            .setTitle('Error!!')
            .setDescription(`${permissionError}`)
            .setTimestamp()
            .setColor('RED')
            .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
            .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)
            message.lineReply(permembed)
            return
          }
        }



        // Ensure the user has the required roles
        for (const requiredRole of requiredRoles) {
          const role = guild.roles.cache.find(
            (role) => role.name === requiredRole
          )

          if (!role || !member.roles.cache.has(role.id)) {
            const rolembed = new MessageEmbed()
            .setTitle('Error!!')
            .setDescription(`You must have the "${requiredRole}" role to use this command.`)
            .setTimestamp()
            .setColor('RED')
            .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
            .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)
            message.lineReply(rolembed)
            return
          }
        }

        // Ensure the user has not ran this command too frequently
        //guildId-userId-command
        let cooldownString = `${guild.id}-${member.id}-${command}`
        console.log('cooldownString:', cooldownString)

        if (cooldown > 0 && recentlyRan.includes(cooldownString)) {
          const cembed = new MessageEmbed()
            .setTitle('Error!!')
            .setDescription(`${cooldownmsg} ${cooldown} seconds`)
            .setTimestamp()
            .setColor('RED')
            .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
            .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)
            message.lineReply(cembed)
          return
        }

        

        // Ensure we have the correct number of arguments
        if (
          arguments.length < minArgs ||
          (maxArgs !== null && arguments.length > maxArgs)
        ) {
          const sembed = new MessageEmbed()
            .setTitle('Error!!')
            .setDescription(`Incorrect syntax! Use ${name} ${expectedArgs}`)
            .setTimestamp()
            .setColor('RED')
            .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
            .setFooter(`MADE BY ${developer}` , `${message.author.displayAvatarURL({dynamic : true})}`)
            message.lineReply(sembed)
          return
        }
        if (cooldown > 0) {
          recentlyRan.push(cooldownString)

          setTimeout(() => {
            console.log('Before:', recentlyRan)

            recentlyRan = recentlyRan.filter((string) => {
              return string !== cooldownString
            })

            console.log('After:', recentlyRan)
          }, 1000 * cooldown)
        }

         // Handle the custom command code
        callback(message, arguments, arguments.join(' '), client, profileData)

        
    }
  })
}