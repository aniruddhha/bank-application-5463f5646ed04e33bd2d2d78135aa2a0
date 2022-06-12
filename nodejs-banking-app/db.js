const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'aniruddha',
    password: 'aniruddha',
    database: 'bankdb',
    post: 5432
})

client.connect(err => {
    if (err) {
        console.log(`❌ Error In Connectivity`)
        return
    }
    console.log(`\n ✅ Connected Successfully`)
})

const createNewAccount = ({ acId, acNm, balance }) => {
    client.query(`insert into account values ($1, $2, $3)`, [acId, acNm, balance], (err, res) => {
        if (err) console.log(`\n ❌ Problem In Creating the Customer`)
        else {
            console.log(`\n ✅ New Customer Created Successfully`)
        }
    })
}

const withdraw = ({ acId, amount }) => {
    client.query(`select balance from account where ac_id = $1`, [acId], (err, res) => {
        if (err) {
            console.log(`\n ❌ Problem In Withdrawing`)
        } else {
            const balance = parseFloat(res.rows[0].balance)

            const newBalance = balance - amount

            client.query(`update account set balance = $1 where ac_id = $2`, [newBalance, acId], (err, res) => {
                if (err) console.log(`\n ❌ Problem In Withdrawing`)
                else console.log(`\n ✅ Amount ${amount} Withdrawal Successfully`)
            })
        }
    })
}

const deposit = ({ acId, amount }) => {
    client.query(`select balance from account where ac_id = $1`, [acId], (err, res) => {
        if (err) {
            console.log(`\n ❌ Problem In Deposit`)
        }
        else {
            const balance = parseFloat(res.rows[0].balance)
            const newBalance = balance + amount

            client.query(`update account set balance = $1 where ac_id = $2`, [newBalance, acId], (err, res) => {
                if (err) console.log(`\n ❌ Problem In Depositing`)
                else console.log(`\n ✅ Amount ${amount} Deposited Successfully`)
            })
        }
    })
}

const transfer = ( {srcId, destId, amount }) => {
    withdraw({ acId : srcId, amount })
    deposit({ acId : destId, amount })
}

const balance  = (acId) => {
    client.query(`select balance from account where ac_id = $1`, [acId], (err, res) => {
        if (err) {
            console.log(`\n ❌ Problem In Fetching the balance`)
        } else {
            const balance = parseFloat(res.rows[0].balance)
            console.log(`\n 💰 Your Account Balance Is : ${balance}`)
        }
    })
}


module.exports = {
    createNewAccount, deposit, withdraw, transfer, balance
}





