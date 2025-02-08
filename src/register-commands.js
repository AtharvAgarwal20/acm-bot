require('dotenv').config()
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js')

const commands = [
    {
        name: 'hey',
        description: 'Replies with "Hey!"'
    },
    {
        name: 'ping',
        description: 'Pong!'
    },
    {
        name: 'add',
        description: 'Adds two numbers',
        options: [
            {
                name: 'first-number',
                description: 'The First Number',
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: 'One',
                        value: 1
                    },
                    {
                        name: 'Two',
                        value: 2
                    }
                ],
                required: true
            },
            {
                name: 'second-number',
                description: 'The Second Number',
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: 'One',
                        value: 1
                    },
                    {
                        name: 'Two',
                        value: 2
                    }
                ],
                required: true
            }
        ]
    },
    {
        name: 'embed',
        description: 'Sends an embed'
    }
]

const rest = new REST({version: '10'}).setToken(process.env.TOKEN)

const registerCommands = async () => {
    try {
        console.log('registering slash commands')
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        )
        console.log('slash commands registered')
    } catch (error) {
        console.log(error)
    }
}

registerCommands()