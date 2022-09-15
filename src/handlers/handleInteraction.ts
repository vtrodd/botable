import {CacheType, Interaction} from 'discord.js'
import {handleCommand} from '.'

export const handleInteraction = async (interaction: Interaction<CacheType>) => {
  if (interaction.isCommand()) return handleCommand(interaction)
}