module.exports = async(client) =>
{
    client.on('interactionCreate', async (interaction) => {


        if(interaction.isButton())
        {
            if(interaction.customId === 'shareablelink')
            interaction.reply({content: "https://dsc.gg/msnoty"});
        }       

        
        
    });
}
