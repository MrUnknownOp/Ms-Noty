 const client = require('../index');
client.on('interactionCreate', async (interaction) => {

    //We know its a button
    if(interaction.isButton())
    {
        //Invite button
        if(interaction.customId == 'share_able')
        {
            interaction.reply({content: "https://dsc.gg/msnoty"});
        }
    }       

        
        
});

