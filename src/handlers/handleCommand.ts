import {CacheType, CommandInteraction} from 'discord.js'
import {commands} from '../commands'

export const handleCommand = async (interaction: CommandInteraction<CacheType>) => {
  const {commandName} = interaction

  const command = commands.find(cmd => cmd.info.name === commandName)

  if (!command) return

  command.execute(interaction)
}