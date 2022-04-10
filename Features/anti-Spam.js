module.exports = (client) => {
    const usersMap = new Map();
    const LIMIT = 5;
    const TIME = 10000;
    const DIFF = 3000;

    

    client.on('messageCreate', async(message) => {
        if(message.author.bot) return;
        

        if(usersMap.has(message.author.id)) {
            const userData = usersMap.get(message.author.id);
            const { lastMessage, timer } = userData;
            const difference = message.createdTimestamp - lastMessage.createdTimestamp;
            let msgCount = userData.msgCount;
            //console.log(difference);

            if(difference > DIFF) {
                clearTimeout(timer);
                //console.log('Cleared Timeout');
                userData.msgCount = 1;
                userData.lastMessage = message;
                userData.timer = setTimeout(() => {
                    usersMap.delete(message.author.id);
                    //console.log('Removed from map.')
                }, TIME);
                usersMap.set(message.author.id, userData)
            }
            else {
                ++msgCount;
                if(parseInt(msgCount) === LIMIT) {
                    let muterole = message.guild.roles.cache.find(role => role.name === 'muted');
                    if(!muterole) {
                        message.channel.send("Error Muted role not found please use <cmr to create muted role :D")
                    }
                    message.member.roles.add(muterole);
                    message.channel.send('You have been muted!');
                    setTimeout(() => {
                        message.member.roles.remove(muterole);
                        message.channel.send('You have been unmuted!')
                    }, TIME);
                } else {
                    userData.msgCount = msgCount;
                    usersMap.set(message.author.id, userData);
                }
            }
        }
        else {
            let fn = setTimeout(() => {
                usersMap.delete(message.author.id);
                
            }, TIME);
            usersMap.set(message.author.id, {
                msgCount: 1,
                lastMessage : message,
                timer : fn
            });
        
        
        }
    })
}

module.exports.config = {
    displayName: 'Anti Spam',
    dbName: 'ANTI-SPAM'
  }