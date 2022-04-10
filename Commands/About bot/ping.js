module.exports = {
    name: 'ping',
    category: 'About Bot',
    description: 'tells the letancy of this bot.',
    testOnly: true,
    slash: 'both',
    callback: ({client}) => {
      return `Ping: ${client.ws.ping}`;
        
    },
  }