module.exports = {
    name: 'squareroot',
    aliases: ['sqrt'],
    expectedArgs: '<number>',
    minArgs: 1,
    maxArgs: 1,
    slash: 'both',
    testOnly: true,
    category:'Calculation',
    description:'A simple square root command',
    callback: ({args}) => {
        let sqrt = args;
        let sqt = Math.sqrt(sqrt);
        
        return `The square root of ${sqrt} is ${sqt}!`;
    },
  }