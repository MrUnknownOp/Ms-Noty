const { prefix } = require('../config.json')
const profileModel = require("../schemas/profile-schema");


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
      throw new Error(`Unknown permission node "${permission}"`)
    }
  }
}

let recentlyRan = [] // guildId-userId-command

module.exports = async(client, commandOptions) => {

  

  


  let {
    commands,
    expectedArgs = '',
    permissionError = 'You do not have permission to run this command.',
    minArgs = 0,
    maxArgs = null,
    cooldown = -1,
    cooldownmsg = 'You cannot use that command so soon, please wait for',
    permissions = [],
    requiredRoles = [],
    callback,
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

  // Listen for messages
  client.on('message', async(message) => {
    const { member, content, guild, channel } = message

    for (const alias of commands) {
      const command = `${prefix}${alias.toLowerCase()}`

      if (
        content.toLowerCase().startsWith(`${command} `) ||
        content.toLowerCase() === command
      ) {
        
        // Ensure the user has the required permissions
        for (const permission of permissions) {
          if (!member.hasPermission(permission)) {
            message.reply(permissionError)
            return
          }
        }



        // Ensure the user has the required roles
        for (const requiredRole of requiredRoles) {
          const role = guild.roles.cache.find(
            (role) => role.name === requiredRole
          )

          if (!role || !member.roles.cache.has(role.id)) {
            message.reply(
              `You must have the "${requiredRole}" role to use this command.`
            )
            return
          }
        }

        // Ensure the user has not ran this command too frequently
        //guildId-userId-command
        let cooldownString = `${guild.id}-${member.id}-${commands[0]}`
        console.log('cooldownString:', cooldownString)

        if (cooldown > 0 && recentlyRan.includes(cooldownString)) {
          message.reply(`${cooldownmsg} ${cooldown} seconds`)
          return
        }

        // Split on any number of spaces
        const arguments = content.split(/[ ]+/)

        // Remove the command which is the first index
        arguments.shift()

        // Ensure we have the correct number of arguments
        if (
          arguments.length < minArgs ||
          (maxArgs !== null && arguments.length > maxArgs)
        ) {
          message.reply(
            `Incorrect syntax! Use ${prefix}${alias} ${expectedArgs}`
          )
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
        let profileData;
        try {
          profileData = await profileModel.findOne({ userID: message.author.id });
          if (!profileData) {
            let profile = await profileModel.create({
              userID: message.author.id,
              serverID: message.guild.id,
              tcoins: 1000,
              bank: 0,
            });
            profile.save();
          }
        } catch (err) {
          console.log(err);
        }

         // Handle the custom command code
        callback(message, arguments, arguments.join(' '), client , profileData)

        
      }
    }
  })

            
       

}