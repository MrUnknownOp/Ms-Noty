module.exports = {
    name: 'divide',
    aliases: ['div'],
    expectedArgs: '<divisor> <dividend>',
    minArgs: 2,
    maxArgs: 2,
    slash: 'both',
    testOnly: true,
    category:'Calculation',
    description:'A simple divide command',
    callback: ({args}) => {
        const [divisor, dividend] = args;

        let Quotient = dividend / divisor;

        return `The Quotient of ${dividend}/${divisor} is ${Quotient}!`
    },
  }