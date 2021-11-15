
const { words } = require('../../utility/fast-type-words.json')



const games = {}

const stages = {
  STARTING: (counter) => {
    return `A new "fast type" game is starting in ${counter}s!
rules are simple you will have 60 for you to gain the points , more points more speed`
  },
  IN_GAME: (word) => {
    let spacedWord = ''

    for (const character of [...word]) {
      spacedWord += character
      spacedWord += ' '
    }

    return `The new word is **${spacedWord}**!`
  },
  ENDING: (points) => {
    const sorted = Object.keys(points).sort((a, b) => {
      return points[b] - points[a]
    })

    let results = ''

    for (const key of sorted) {
      const amount = points[key]
      results += `<@${key}> had ${amount} point${amount === 1 ? '' : 's'}\n`
    }

    return `The game is now over Here's how everyone did:\n\n${results}------------------`
  },
}

const selectWord = (game) => {
  game.currentWord =
    game.remainingWords[Math.floor(Math.random() * game.remainingWords.length)]

  const index = game.remainingWords.indexOf(game.currentWord)
  game.remainingWords.splice(index, 1)
}

const gameLoop = () => {
  for (const key in games) {
    const game = games[key]
    const { message, stage } = game

    if (stage === 'STARTING') {
      let string = stages[stage](game.counter)
      message.edit(string)

      if (game.counter <= 0) {
        game.stage = 'IN_GAME'
        game.counter = 70

        selectWord(game)

        string = stages[game.stage](game.currentWord)
        message.edit(string)
      }
    } else if (stage === 'IN_GAME') {
      if (game.counter <= 0) {
        game.stage = 'ENDING'

        const string = stages[game.stage](game.points)
        message.edit(string)

        // Delete the game
        delete games[key]

        continue
      }
    }

    --game.counter
  }

  setTimeout(gameLoop, 1000)
}

module.exports = {

    commands: ['fasttype', 'ft'],
        minArgs: 0,
        maxArgs: 0,
        cooldown: 120,

    callback: (message, arguments, text,client) => {

      try {
        client.on('message', (message) => {
          const { channel, content, member } = message
          const { id } = channel
    
          const game = games[id]
    
          if (game && game.currentWord && !member.user.bot) {
            message.delete()
    
            if (
              game.stage === 'IN_GAME' &&
              content.toLowerCase() === game.currentWord.toLowerCase()
            ) {
              game.currentWord = null
              const seconds = 1
    
              const { points } = game
              points[member.id] = points[member.id] || 0
    
              message
                .reply(`You won! +1 point (${++points[member.id]} total)`)
                .then((newMessage) => {
                  newMessage.delete({
                    timeout: 1000 * seconds,
                  })
                })
    
              setTimeout(() => {
                if (game.stage === 'IN_GAME') {
                  selectWord(game)
    
                  const string = stages[game.stage](game.currentWord)
                  game.message.edit(string)
                }
              }, 1000 * seconds)
            }
          }
        })
    
        gameLoop()
      
      
    
      
        const { channel } = message
    
        message.delete()
        channel.send('Preparing game...').then((message) => {
          games[channel.id] = {
            message,
            stage: 'STARTING',
            counter: 10,
            remainingWords: [...words],
            points: {
              
            },
          }
        })
      } catch (error) {
        message.reply(error)
      }

    
  }
}