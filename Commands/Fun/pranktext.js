module.exports = {
    name: 'pranktext',
    minArgs: 1,
    maxArgs: -1,
    cooldown: '5s',
    category: 'Fun',
    description: 'A simple command to prank and get banned in a server ;)',
    expectedArgs: '<Text>',
    slash: 'both',
    testOnly: true,
    callback: ({text}) => {
         const pranked = text.toString();
        return '`' + pranked + '`';
 
    }
}
