module.exports = {
    name: 'hey',
    description: 'Responds with Hello',
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: Object[],
    // permissionsRequired: PermissionFlagsBits.Permission[],
    // botPermissions: PermissionFlagsBits.Permission[],
    deleted: true,
    callback: (client, interaction) => {
        interaction.reply('Hey!')
    }
}