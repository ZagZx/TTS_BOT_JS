const { Client, GatewayIntentBits, Events} = require('discord.js')
require('dotenv').config()
const TOKEN = process.env.TOKEN

client = new Client({ intents: 
[
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages
] 
})

module.exports = client


//Evento que ocorre apenas uma vez. 
//Quando o bot está pronto, executa a função (), que é basicamente o lambda de python, uma função sem nome
client.once(Events.ClientReady, () =>{ 
    console.log(`Estou online com o nick de ${client.user.username}`)
})


client.login(TOKEN)