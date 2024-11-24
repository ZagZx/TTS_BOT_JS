const { Client, GatewayIntentBits} = require('discord.js')
const fs = require('fs')
const path = require('path')
require('dotenv').config()
const TOKEN = process.env.TOKEN

client = new Client({ intents: 
[
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildVoiceStates
] 
})

module.exports = client

const eventsPath = path.join(__dirname, 'events')
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'))

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}



client.login(TOKEN)