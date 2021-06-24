import React from 'react'


export default function Unbudgeted(props) {
    return (
        <div>
            <label className="unbudgeted__headlines_label">Obudgeterat</label>

            <label>{props.data.obudgeterat}</label>



        </div>
    )
}
