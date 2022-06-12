const { Client  } = require('pg')

const client = new Client({
    host : 'localhost',
    user : 'aniruddha',
    password : 'aniruddha',
    database : 'bankdb',
    post : 5432
})


client.connect(err  => {
    if(err) {
        console.log(`❌ Error In Connectivity`)
        return
    }
    console.log(`✅ Connected Successfully`) 
})


// const connect = async () => await client.connect()
// connect()
   

