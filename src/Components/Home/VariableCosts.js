import React, { useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function VariableCosts(props) {

    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    }

    return (
        <div>
            <label>Rörliga Kostnader</label>

            {
                props.data.rörliga.map((x) => (
                    <div>
                        <label>{x.namn}</label>
                        <div style={{ width: 75, height: 75 }}>
                            <CircularProgressbar value={percentage(x.spenderat, x.attSpendera)} text={`${percentage(x.spenderat, x.attSpendera)}%`} />
                        </div>


                    </div>
                ))
            }

        </div>
    )
}
