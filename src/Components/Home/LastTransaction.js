import React, { useEffect } from 'react'

export default function LastTransaction(props) {

    useEffect(() => {

        console.log(props.data)

    }, [])


    return (
        <div>
            <label>Köp</label>


            {/* {props.data.purchase.map((x) =>
                <div>
                    <label>{x.köpNamn}: Pris: {x.pris} Datum: {x.datum}</label>
                </div>
            )} */}

            <button>Lägg till köp</button>

        </div>
    )
}
