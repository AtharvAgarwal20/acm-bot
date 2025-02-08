const {EmbedBuilder} = require('discord.js')

module.exports = {
    name: 'embed',
    description: 'Sends an embed',
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: Object[],
    // permissionsRequired: PermissionFlagsBits.Permission[],
    // botPermissions: PermissionFlagsBits.Permission[],
    // deleted: Boolean,
    callback: (client, interaction) => {
        const embed = new EmbedBuilder()
            .setTitle('Embed title')
            .setDescription('Embed description this is :)')
            .setColor('Random')
            .addFields({name: 'Field title', value: 'Some random value', inline: true})
            .addFields({name: 'Field title', value: 'Some random value', inline: true})

        // interaction.reply({embeds: [embed]})
        interaction.reply('Success')
        interaction.channel.send({embeds: [embed]})
    }
}