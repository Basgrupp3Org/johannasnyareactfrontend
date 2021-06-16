import React from 'react'


const Transactions = () => {
    return (
        <>
            <div className="transaction-inputs">
                <form>
                    <label>Datum från:</label>
                    <input type="date" />
                    <label>Datum till:</label>
                    <input type="date" />
                    <label>Välj kategori:</label>
                    <input type="text" />
                    <button className="filter-btn">Filtrera</button>
                </form>
            </div>


        </>
    )
}

export default Transactions
