import React, { useState, useEffect } from 'react'

export default function FixedCosts(props) {

    const [total, setTotal] = useState();
    const [total1, setTotal1] = useState();

    useEffect(() => {
        let localTotal = 0;

        // console.log(props.data.fasta)
        // props.data.fasta.forEach((element, i) => localTotal += (element.summa));



        setTotal1(localTotal);

        localTotal += props.data.bostad;
        localTotal += props.data.fordon;

        setTotal(localTotal);


    }, [])





    return (
        <div className="headlines2">
            <label>Fasta Utgifter</label>

            <label>Total: {total}</label>
            <label>Bostad: {props.data.bostad}</label>
            <label>Fordon: {props.data.fordon}</label>
            <label>Övrigt: {total1}</label>

        </div>
    )
}
