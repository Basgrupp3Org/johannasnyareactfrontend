import React from 'react'
import './HomePage.css'
import Income from './Income'
import FixedCosts from './FixedCosts'
import SavingGoal from './SavingGoal'


export default function Budget(props) {
    return (
        <div>
            <label className="center">Spending Plan</label>

            <p className="center" className="dates">{props.data.datumtill} - {props.data.datumfrån} </p>


        <div className="headlines">
      

        <Income data={props.data}/>
        <FixedCosts data={props.data} />
        <SavingGoal data={props.data} />
        
        </div>
        
     

        
        

            
        </div>
    )
}
