const {joinVoiceChannel} = require('@discordjs/voice')

/**
 * Checa se a mensagem digitada foi "zentrar", se sim conecta o bot na call da pessoa que digiou
 */
async function entrarOnMessage(message)
{   
    if(message.content === 'zentrar')
    {
        const channel = message.member.voice.channel

        if(channel)
        {
            const connection = await joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator
            })
            await message.channel.send(`Entrei em <#${channel.id}>`)
        }
        else{
            await message.reply("Você precisa estar em uma call")
        }
    }
}

async function entrarSlash()
{

}
module.exports = {entrarOnMessage, entrarSlash}