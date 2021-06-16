import React, { useEffect, useState } from 'react'
import Budget from './Budget'
import './HomePage.css'
import LastTransaction from './LastTransaction'


export default function HomePage() {

    const [budgetData, setBudgetData] = useState([]);
    const [purchaseData, setPurchaseData] = useState([]);

    useEffect(() => {

        fetch('Budget.json', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

        })
            .then((data) => data.json())
            .then((data) => {
                setBudgetData(data)
            })
            .catch((err) => {
                console.error(err);
            });


    }, []);

    useEffect(() => {

        fetch('Purchase.json', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then((data) => data.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.error(err);
            });
    }, [])
    return (
        <div>

            {budgetData ? <Budget data={budgetData} /> : "Laddar data.."}
            <hr />
            {purchaseData ? <LastTransaction data={purchaseData} /> : "Laddar data.."}
        </div>


    )
}
