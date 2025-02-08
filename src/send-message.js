require('dotenv').config()
const {Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildModeration,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

const roles = [
    {
        id: '1291722107008319560',
        label: 'Red'
    },
    {
        id: '1291722245500043414',
        label: 'Blue'
    },
    {
        id: '1291722283429134337',
        label: 'Green'
    },
]

client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get('1291179766719840326')
        if (!channel) return;

        const row = new ActionRowBuilder()

        for (let role of roles) {
            row.components.push(
                new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
            )
        }

        await channel.send({
            content: 'Claim or remove a role below!',
            components: [row]   // create a new row for every 5 roles
        })

        process.exit()
    } catch (e) {
        console.log(e)
    }
})

client.on('interactionCreate', (interaction) => {

})

client.login(process.env.TOKEN)