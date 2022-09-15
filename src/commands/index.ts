export * from './ping'
import {ping} from '.'

export const commands = [
  ping
]

export const getApplicationCommandData = () => commands.map(command => command.info.toJSON())

export default {
  commands,
  getApplicationCommandData
}