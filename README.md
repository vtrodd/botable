<h1 align="center">Botable</h1>

🤖 Botable serves as the boilerplate code for an upcoming range of Discord bots, acting as an underlying framework for subsequent bots to build on top of.

## Built-in Commands

- `/ping` - Replies with pong!

## Starting the bot

In order to run this bot, you'll need a `config.json` file in the main directory which contains the token and client_id for your bot:
```json
{
  "TOKEN": "A LONG STRING OF CHARACTERS (don't share this)",
  "CLIENT_ID": "THIS IS THE ID OF YOUR BOT"
}
```

From a terminal you can then start up the bot with:
```
npm start
```