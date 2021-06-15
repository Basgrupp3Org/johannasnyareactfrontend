import React from 'react'


export default function BudgetCategory(props) {
    return (
        <div>
            <label>{props.headline}</label>

            <p>{props.data}</p>
            
        </div>
    )
}
