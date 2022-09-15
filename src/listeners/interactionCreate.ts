import {Client} from 'discord.js'
import handleInteraction from '../handlers/handleInteraction'

export const interactionCreate = (client: Client) => {
  client.on('interactionCreate', handleInteraction)
}