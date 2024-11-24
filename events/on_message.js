const {Events} = require('discord.js')
const client = require('../index')
const {entrarOnMessage} = require('../commands/zentrar')

module.exports = {
    name:Events.MessageCreate,
    once: false,

    async execute(message)
    {   
        if(message.author != client.user)
        {
            entrarOnMessage(message)
            console.log('OLHA A MENSAGEM')
        }
    }
}