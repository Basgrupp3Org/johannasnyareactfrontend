import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function BigSavingGoal(props) {

    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    }
    return (
        <>

<div className="HeaderLabel">
        <label className="BuyLabel">Sparmål</label>

        </div>

            { 
                props.data.sparmål.map((x) => (
                    <>
                        <label className="LabelSaving1">{x.namn}</label>
                        <div className="LabelSaving2" style={{ width: 90, height: 80 }}>
                            <CircularProgressbar value={percentage(x.sparat, x.attSpara)} text={`${percentage(x.sparat, x.attSpara)}%`} />
                            
                        </div>
                        <label className="LabelSaving3" >Sparat:{x.sparat} Mål: {x.attSpara}  </label>


                    </>
                ))
            } 
            
        </>
    )
}
