module.exports = {
    name: 'percent',
    aliases: ['per'],
    expectedArgs: '<total_amount> <amount>',
    minArgs: 2,
    maxArgs: 2,
    slash: 'both',
    testOnly: true,
    category:'Calculation',
    description:'A simple percent command',
    callback: ({args}) => {
        const [total_amount, amount] = args;

        let percentage = (total_amount/amount) * 100;
         
        return `${amount} is ${percentage}% of ${total_amount}`;
    },
}