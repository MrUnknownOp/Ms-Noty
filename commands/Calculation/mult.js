module.exports = {
    commands: ['mult'],
    expectedArgs: '[factor] [factor]',
    minArgs: 2,
    maxArgs: null,
    callback: (message, arguments, text) => {
        try {
            let product = 1
        arguments.forEach((value) => {
            product = product * parseFloat(value);
        })
        message.channel.send("Idiot you didn't even know that product of " + arguments + " is " + product.toString());
        } catch (err) {
            message.channel.send(err)
        }
    
    },
    permissions: [],
    requiredRoles: [],
  }