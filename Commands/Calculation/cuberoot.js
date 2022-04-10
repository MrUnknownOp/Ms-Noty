module.exports = {
    name: 'cuberoot',
    aliases: ['cbrt'],
    expectedArgs: '<number>',
    minArgs: 1,
    maxArgs: 1,
    slash: 'both',
    testOnly: true,
    category:'Calculation',
    description:'A simple cube root command',
    callback: ({args}) => {
            let cubeRoot = args;
            let cubeRooted = Math.cbrt(cubeRoot)

            return `Cube root of ${cubeRoot} is ${cubeRooted}!`
    },
  }