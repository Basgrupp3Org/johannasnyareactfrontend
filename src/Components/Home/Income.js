import React from 'react'
import './HomePage.css'

export default function Income(props) {

   

    
    return (
        <div className="headlines2">
            <label>Inkomster</label>

            <label>{props.data.inkomst}</label>
            
        </div>
    )
}
