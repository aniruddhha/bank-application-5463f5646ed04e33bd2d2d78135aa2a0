import styles from './deposit.module.css'

export function Deposit() {

    const onDeposit = (e) => {
        e.preventDefault()

        const acId = e.target.acId.value
        const amount = e.target.amount.value

        console.log(`Id ${acId} Amount ${amount}`)

        fetch('http://localhost:3100/deposit', {
            method : 'PUT',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ acId, amount })
        }).then( res => res.json() )
        .then(json => console.log(json))
    }

    return (
        <div className={styles.depCont}>
            <h1> Deposit Amount </h1>
            <form onSubmit={onDeposit}>
                <input type='number' placeholder='Account Id' name='acId'/>
                <input type='number' placeholder='Amount' name='amount'/>
                <input type='submit' value='Deposit' />
            </form>
        </div>
    )
}