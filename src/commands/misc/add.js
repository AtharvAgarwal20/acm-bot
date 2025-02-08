const {ApplicationCommandOptionType} = require('discord.js')

module.exports = {
    name: 'add',
    description: 'Adds two numbers',
    // devOnly: Boolean,
    // testOnly: Boolean,
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
    ],
    // permissionsRequired: PermissionFlagsBits.Permission[],
    // botPermissions: PermissionFlagsBits.Permission[],
    // deleted: Boolean,
    callback: (client, interaction) => {
        const firstNumber = interaction.options.get('first-number').value
        const secondNumber = interaction.options.get('second-number').value
        const sum = firstNumber + secondNumber
        interaction.reply(`${firstNumber} + ${secondNumber} = ${sum}`)
    }
}