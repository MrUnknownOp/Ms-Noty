module.exports = {
    name: 'subtract',
    aliases: ['sub'],
    expectedArgs: '<minuend> <subtrahend>',
    minArgs: 2,
    maxArgs: 2,
    slash: 'both',
    testOnly: true,
    category:'Calculation',
    description:'A simple subtract command',
    callback: ({args}) => {
        const [minuend, subtrahend] = args;

        let difference = minuend - subtrahend;

        return `The difference of ${minuend} and ${subtrahend} is ${difference}!`
    },
  }