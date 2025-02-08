module.exports = {
    name: 'ping',
    description: 'Pong!',
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: Object[],
    // permissionsRequired: PermissionFlagsBits.Permission[],
    // botPermissions: PermissionFlagsBits.Permission[],
    // deleted: Boolean,
    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`)
    }
}