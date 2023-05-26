const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a playlist do dev desse bot"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/2auY2zIWgxomNB7q2kMfTV?si=bbbe97de7ca348f4")
    }
}