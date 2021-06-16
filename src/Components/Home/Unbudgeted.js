import React from 'react'


export default function Unbudgeted(props) {
    return (
        <div>
            <label className="headlines2">Obudgeterat</label>

            <label>{props.data.obudgeterat}</label>



        </div>
    )
}
