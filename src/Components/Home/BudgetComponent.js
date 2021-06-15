import React from 'react'
import './HomePage.css'
import BudgetCategory from './BudgetCategory'


export default function BudgetComponent(props) {
    return (
        <div>
            <label className="center">Spending Plan</label>

            <p className="center">{props.data.datumtill} - {props.data.datumfrån} </p>


        <div className="headlines">
        {/* <p>Inkomster</p><p>Fasta Kostnader</p> <p>Sparmål</p><p>Rörliga Kostnader</p><p>Obudgeterat</p> */}

        <BudgetCategory headline="Inkomster" data={props.data.inkomst}/>
        <BudgetCategory headline="Fastna Kostnader" data={props.data.bostad, props.data.fordon, props.data.sparmål} />
        <BudgetCategory headline="Sparmål" />
        <BudgetCategory headline="Rörliga Kostnader" />
        <BudgetCategory headline="Obudgeterat" />
        </div>

        
        

            
        </div>
    )
}
