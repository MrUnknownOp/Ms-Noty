module.exports = async(client) =>
{
    client.on('clickButton', async (button) => {
        if(button.id === "shareablelink")
        {
            button.reply.defer();
            button.channel.send("https://dsc.gg/msnoty")
        }

        
        
    });
}
