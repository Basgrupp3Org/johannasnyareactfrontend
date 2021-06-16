import React from 'react'
import './HomePage.css'
import Income from './Income'
import FixedCosts from './FixedCosts'
import SavingGoal from './SavingGoal'
import Unbudgeted from './Unbudgeted'
import VariableCosts from './VariableCosts'


export default function Budget(props) {
    return (
        <div>
            <label className="center">{props.data.namn}</label>

            <p className="center" className="dates">{props.data.datumtill} - {props.data.datumfrån} </p>


            <div className="headlines">


                <Income data={props.data} />
                <FixedCosts data={props.data} />
                <SavingGoal data={props.data} />
                <VariableCosts data={props.data} />
                <Unbudgeted data={props.data} />


            </div>







        </div>
    )
}
