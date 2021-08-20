const profile = require('../../schemas/profile-schema')



module.exports = {

    commands:'search',
    minArgs : 0,
    maxArgs : 0,
    cooldown : 12,
    cooldownmsg : "Please wait",
    callback: async(message) => {
        const locations = [
            "car",
            "bathroom",
            "park",
            "truck",
            "pocket",
            "computer",
            "discord"
        ];

        const chosenLocations = locations.sort(() => Math.random() - Math.random()).slice(0, 3);

        const filter = ({ author, content }) => message.author == author && chosenLocations.some((location) => location.toLowerCase() == content.toLowerCase());

        const collector = message.channel.createMessageCollector(filter, { max: 1, time: 25000 });

        const earnings = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;


        collector.on('collect', async (m) => {

            if(m.content.toLowerCase() === "truck")
            {
                message.channel.send(`You found ${earnings} Noty(s) in the truck!, but whos truck is that?`)
            }

            if(m.content.toLowerCase() === "car")
            {
                message.channel.send(`You found ${earnings} Noty(s) in the your car!, I wonder why don't you clean your car.`)
            }

            if(m.content.toLowerCase() === "park")
            {
                message.channel.send(`You found ${earnings} Noty(s) in park!but you stepped on a **dawg's shit**.`)
            }

            if(m.content.toLowerCase() === "pocket")
            {
                message.channel.send(`You found ${earnings} Noty(s) in your pocket!, I hope you never washed money in that.`)
            }

            if(m.content.toLowerCase() === "bathroom")
            {
                message.channel.send(`You found ${earnings} Noty(s) in bathroom!, I wonder you forgot it while bathing, right?.`)
            }

            if(m.content.toLowerCase() === "discord")
            {
                message.channel.send(`You found ${earnings} Noty(s) while using discord!`)
            }

            if(m.content.toLowerCase() === "computer")
            {
                message.channel.send(`You found ${earnings} Noty(s) while using your computer!, Now its better to use more computer **XD**.`)
            }


            await profile.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: earnings,
                    },
                }
            );
        });

        collector.on('end', (collected, reason) => {
            if (reason == "time") {
                message.channel.send('You ran out of time!');
            }
        });


        message.channel.send(`<@${message.author.id}> Which location would you like to search?\n Type the location in this channel\n \`${chosenLocations.join('` `')}\``);
    }
}