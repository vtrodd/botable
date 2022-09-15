import {Client} from 'discord.js'
import {getApplicationCommandData} from '../commands'

export const ready = (client: Client) => {
  client.on('ready', async () => {
    if (!client.user || !client.application) return
    console.info(`${client.user.username} is online.`)

    const registeredCommands = await client.application.commands.set(getApplicationCommandData())
    console.info(`Registered ${registeredCommands.size} commands:`)
    console.info(registeredCommands.map(command => command.name))
  })
}