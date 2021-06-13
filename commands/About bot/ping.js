module.exports = {
    commands: 'ping',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text, client) => {
      message.reply(':loading:').then((resultMessage) => {
        const ping = resultMessage.createdTimestamp - message.createdTimestamp
  
        resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
      })
    },
  }