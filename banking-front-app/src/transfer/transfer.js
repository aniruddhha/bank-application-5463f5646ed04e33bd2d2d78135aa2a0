import styles from './transfer.module.css'

export function Transfer() {

    const onTransfer = (e) => {
        e.preventDefault()

        const srcId = e.target.srcId.value
        const destId = e.target.destId.value
        const amount = e.target.amount.value

        console.log(`Source ${srcId} Destination ${destId} Amount ${amount}`)

        fetch('http://localhost:3100/transfer', {
            method : 'PUT',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ srcId, destId, amount })
        }).then( res => res.json() )
        .then(json => console.log(json))
    }


    return (
        <>
            <div className={styles.trnCont}>
                <h1> Transfer Amount </h1>
                <form onSubmit={onTransfer}>
                    <input type='number' placeholder='Source Id' name='srcId' />
                    <input type='number' placeholder='Destination Id' name='destId' />
                    <input type='number' placeholder='Amount' name='amount' />
                    <input type='submit' value='Transfer' />
                </form>
            </div>
        </>
    )
}