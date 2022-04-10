const games = require('../../Utils/Exporter');
module.exports = {
    name: 'tictactoe',
    aliases:['ttt', 'zerocross', 'zc'],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs:'<Member>',
    cooldown: '2m',
    testOnly: true,
    category:'Games',
    description:'An advance zero cross game based with buttons',
    slash: 'both',
    callback: ({message,interaction}) => {
        if(message)
        {
             games.tictactoe(message,
            {
                idleEmoji: "〰️",
                embedColor: "#00FF00",
                embedFoot: "Let's see, who wins?"

            });
            
        } else if(interaction)
        {
                games.tictactoe(interaction,{
                    idleEmoji: "〰️",
                    embedColor: "#00FF00",
                    embedFoot: "Let's see, who wins?",
                    slash: true,
                    userSlash: "Member"
                });
        }
    }
}