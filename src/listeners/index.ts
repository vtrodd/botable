import {Client} from 'discord.js'
import {guildCreate, guildDelete, interactionCreate, ready} from '.'

export const createListeners = (client: Client) => {
  guildCreate(client)
  guildDelete(client)
  interactionCreate(client)
  ready(client)
}

export default {
  createListeners,
  guildCreate,
  guildDelete,
  interactionCreate,
  ready
}

export * from './guildCreate'
export * from './guildDelete'
export * from './interactionCreate'
export * from './ready'