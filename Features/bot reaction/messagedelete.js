const event = require('events')

module.exports = (client) =>
{
    try {
        client.on('messageDelete' , async (message) => {
            //callback: (message, arguments, text,client) => {
                if(message.author.bot) return;
                message.client.snipes.set(message.channel.id, {
                content: message.content,
                author: message.author.tag,
                member: message.member,
                image: message.attachments.first() ? message.attachments.first().proxyURL : null
                })
            })
    } catch (err) {
        console.log(err);
    }
    
}