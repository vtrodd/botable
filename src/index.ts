import {Client, GatewayIntentBits} from "discord.js"
import * as config from '../config.json'
import {createListeners} from './listeners'

const client = new Client({intents: [GatewayIntentBits.Guilds]})

client.login(config.TOKEN)

createListeners(client)