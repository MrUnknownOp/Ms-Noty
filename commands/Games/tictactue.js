const { tictactoe } = require('reconlx')

module.exports = {

   
        commands: ['tictactue' , 'ttt', 'zerocross', 'zc'],
        minArgs: 0,
        maxArgs: 1,
        cooldown: 0,
        
        callback: (message, arguments, text,client) => {
            const member = message.mentions.members.first() 
            if(!member)  return  message.reply('Please specify a member')
        
            new tictactoe({
                player_two: member, 
                message: message
            })
        }
    
    
   
}