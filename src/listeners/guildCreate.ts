import {Client} from "discord.js"

export const guildCreate = (client: Client) => {
  client.on('guildCreate', async guild => {
    console.info(`Joined a new guild: ${guild.name}`)
  })
}