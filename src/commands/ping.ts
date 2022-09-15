import {SlashCommandBuilder} from 'discord.js'
import {Command} from '../@types/command'

export const ping = new Command(
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),

  async interaction => {
    await interaction.reply({content: 'Pong!', ephemeral: true})
  }
)