import React, { useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function VariableCosts(props) {

    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    }

    return (
        <div >
            <label>Rörliga Kostnader</label>

            {
                props.data.rörliga.map((x) => (
                    <>
                        <label className="LabelSaving1invaraiblecost">{x.namn}</label>
                        <div className="LabelSaving2invaraiblecost" style={{ width: 80, height: 75 }}>
                            <CircularProgressbar value={percentage(x.spenderat, x.attSpendera)} text={`${percentage(x.spenderat, x.attSpendera)}%`} />
                        </div>


                    </>
                ))
            }

        </div>
    )
}
