const {ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'Bans a user from the server',
    // devOnly: Boolean,
    // testOnly: Boolean,
    // deleted: Boolean,
    options: [
        {
            name: 'target-user',
            description: 'The user to ban',
            required: true,
            type: ApplicationCommandOptionType.Mentionable
        },
        {
            name: 'reason',
            description: 'Reason for banning the user',
            required: false,
            type: ApplicationCommandOptionType.String
        },
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],
    callback: (client, interaction) => {
        interaction.reply('Ban')
    }
}