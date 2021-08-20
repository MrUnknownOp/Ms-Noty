const Discord = require('discord.js')
const feature = require('../../schemas/Feature-schema')

module.exports = {
    commands: 'config',
    expectedArgs: 'feature(like: antiadvertise, event, antiswear, chatbot, antispam)',
    minArgs: 0,
    maxArgs: 1,

    callback: async(message, arguments, text) => {

        const {guild} = message;

        const OnFeature = arguments[0];

        if(!OnFeature)
        {
            return message.channel.send("Please Provide a Valid Feature from(antiadvertise, event, antiswear, chatbot, antispam)!")
        }

        if(OnFeature.toLowerCase() === "antiadvertise")
        {
            await feature.findOneAndUpdate(
                {
                  _id: guild.id,
                },
                {
                  _id: guild.id,
                  antiadvertise: true
                },
                {
                  upsert: true,
                }
              )
           message.lineReply( OnFeature +" has been enabled on this server!")

        }else if(OnFeature.toLowerCase() === "antiswear")
        {
            await feature.findOneAndUpdate(
                {
                  _id: guild.id,
                },
                {
                  _id: guild.id,
                  antiswear: true
                },
                {
                  upsert: true,
                }
              )
           message.lineReply( OnFeature +" has been enabled on this server!")

        } else if(OnFeature.toLowerCase() === "event")
        {
            await feature.findOneAndUpdate(
                {
                  _id: guild.id,
                },
                {
                  _id: guild.id,                  
                  greetevent: true
                },
                {
                  upsert: true,
                }
              )
           message.lineReply( OnFeature +" has been enabled on this server!")

        }else if(OnFeature.toLowerCase() === "chatbot")
        {
            await feature.findOneAndUpdate(
                {
                  _id: guild.id,
                },
                {
                  _id: guild.id,                  
                  chatbotId: message.channel.id
                },
                {
                  upsert: true,
                }
              )
           message.lineReply( OnFeature +" has been enabled on this server!")

        } else if(OnFeature.toLowerCase() === "antispam")
        {
            await feature.findOneAndUpdate(
                {
                  _id: guild.id,
                },
                {
                  _id: guild.id,                  
                  antispam: true
                },
                {
                  upsert: true,
                }
              )
           message.lineReply( OnFeature +" has been enabled on this server!")

        } else if(OnFeature.toLowerCase() === "all")
        {
            await feature.findOneAndUpdate(
                {
                  _id: guild.id,
                },
                {
                  _id: guild.id,
                  antiadvertise: true,
                  antiswear: true,
                  greetevent: true,
                  chatbotId: message.channel.id,
                  antispam: true
                },
                {
                  upsert: true,
                }
              )
           message.lineReply( OnFeature +" Features has been enabled on this server!")

        } 


        
        
    },
    permissions: ['MANAGE_MESSAGES'],
    requiredRoles: [],
  }