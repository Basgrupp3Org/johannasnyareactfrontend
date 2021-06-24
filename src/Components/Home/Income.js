import React from 'react'
import './HomePage.css'

export default function Income(props) {




    return (
        <div className="income__fullpage">
            <div className="income__headerdiv">
                <label>Inkomster</label>
            </div>
            <div className="income__contentdiv">
                <label>{props.data.inkomst}</label>
            </div>
        </div>
    )
}
