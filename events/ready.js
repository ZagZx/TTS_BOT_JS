const {Events} = require('discord.js')
const fs = require('fs')

const file = 'database.json'

/**
 * Checa se o arquivo database.json existe, caso não exista, cria um json vazio.
 */
function checkAndCreateDB()
{
    
    fs.access(file,fs.constants.F_OK, (err) => 
        // (err) => é uma arrow function
        //arrow functions são melhores para callbacks porque herdam o this do método
    { 
        if (err != null && err.code == 'ENOENT')
        {
            fs.writeFileSync(file,'{}','utf-8')
            console.log('Database.json não foi encontrado, o arquivo foi criado')
        }
    })
}

function updateJson()
{
    
}

/**
 * Checa se algum servidor em que o bot está não tem o seu id no database, 
 * caso não esteja, coloca o id no database 
 * 
*/
function defaultConfigs(client)
{   
    
    const jsonFile = JSON.parse(fs.readFileSync('database.json'))

    client.guilds.cache.forEach(guild => {
        // console.log(`Conectado ao servidor: ${guild.name}`)

        if(!(guild.id in jsonFile))
        {
            console.log(`${guild.name} não tá no json`)
        }
    })
    
}

module.exports = {
    name: Events.ClientReady,
    once: true,

    execute(client)
    {   
        console.log("=".repeat(40))
        console.log(`Estou online com o nick de ${client.user.username}`)
        console.log("=".repeat(40))
        checkAndCreateDB()
        defaultConfigs(client)
    }
}

