module.exports = {
    name: 'multiply',
    aliases:['mult'],
    expectedArgs: '<factors> <factor>',
    minArgs: 2,
    maxArgs: 2,
    slash: 'both',
    testOnly: true,
    category:'Calculation',
    description:'A simple multiply command',
    callback: ({args}) => {
        const [factors, factor] = args;
        let product = factors * factor;

        return `The product is ${product}!`
    },
  }