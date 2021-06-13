const { prefix } = require('../config.json')

module.exports = (client, aliases, callback) => {

  try {
    if (typeof aliases === 'string') {
      aliases = [aliases]
    }
  
    client.on('message', (message) => {
      const { content } = message
  
      aliases.forEach((alias) => {
        const command = `${prefix}${alias}`
  
        if (content.startsWith(`${command} `) || content === command) {
          console.log(`Running the command ${command}`)
          callback(message)
        }
      })
    })
  } catch (err) {
    console.log(err)
  }
  
}