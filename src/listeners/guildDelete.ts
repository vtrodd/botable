import {Client} from "discord.js"

export const guildDelete = (client: Client) => {
  client.on('guildDelete', async guild => {
    console.info(`Left a guild: ${guild.name}`)
  })
}