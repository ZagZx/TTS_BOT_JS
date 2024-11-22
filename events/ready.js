const {Events} = require('discord.js')
const fs = require('fs')

const file = 'database.json'

module.exports = {
    name: Events.ClientReady,
    once: true,

    createFile()
    {
        fs.access(file,fs.constants.F_OK, (err) => 
            // (err) => é uma arrow function
            //arrow functions são melhores para callbacks porque herdam o this do método
        { 
            console.log(err)
        
            if (err.code == 'ENOENT')
            {
                fs.writeFileSync(file,'{}','utf-8')
            }
        })
    }
}

