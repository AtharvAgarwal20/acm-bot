const {ActivityType} = require('discord.js')

module.exports = (client) => {
    console.log(`${client.user.tag} is online!`)

    client.user.setActivity({
        name: 'Smashing Keyboards',
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=ZCrClSBM1ns'
    })
}