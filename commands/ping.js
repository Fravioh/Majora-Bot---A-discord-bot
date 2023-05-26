const { SlashCommandBuilder } = require("discord.js")

module.exports = {
data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Responde com Pong!"),

async execute(interaticon) {
    await interaticon.reply("Pong")
}
}