module.exports = {
    name: 'square',
    alias: ['sq'],
    expectedArgs: '<number>',
    minArgs: 1,
    maxArgs: 1,
    slash: 'both',
    testOnly: true,
    category:'Calculation',
    description:'A simple square command',
    callback: ({args}) => {
        let square = args;

        let squared = square * square;

        return `The square of ${square} is ${squared}!`;
    },
  }