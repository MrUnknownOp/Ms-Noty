module.exports = {
    name: 'add',
    expectedArgs: '<addends> <addend>',
    minArgs: 2,
    maxArgs: 2,
    slash: 'both',
    testOnly: true,
    category:'Calculation',
    description:'A simple add command',
    callback: ({args}) => {
        const number1 = parseInt(args[0])
        const number2 = parseInt(args[1])
        
        const sum = number1 + number2;
       return `The sum is ${sum}`;
      
         
    },
  }