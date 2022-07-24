import styles from './new-customer.module.css'

export function NewCustomer() {

    const onNewCustomer = e => {
        e.preventDefault()

        const acId = e.target.acId.value
        const acNm = e.target.acNm.value
        const balance = e.target.balance.value

        console.log(`Id ${acId} Name ${acNm} Bal ${balance}`)

        fetch('http://localhost:3100/create', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ acId, acNm, balance })
        }).then( res => res.json() )
        .then(json => console.log(json))

    }

    return (
        <div className={styles.custCont}>
            <h1> Create New Customer </h1>
            <form onSubmit={onNewCustomer}>
                <input type='number' placeholder='Account Id' name='acId'/>
                <input type='text' placeholder='Account Name' name='acNm'/>
                <input type='number' placeholder='Balance' name='balance'/>
                <input type='submit' value='Create' />
            </form>
        </div>
    )
}