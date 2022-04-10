module.exports = {
    name: 'cube',
    expectedArgs: '<number>',
    minArgs: 1,
    maxArgs: 1,
    slash: 'both',
    testOnly: true,
    category:'Calculation',
    description:'A simple cube command',
    callback: ({args}) => {
            let cube = args;
            let Cube = cube*cube*cube

            return `The cube of ${cube} is ${Cube}!`;
    },
    permissions: [],
    requiredRoles: [],
  }