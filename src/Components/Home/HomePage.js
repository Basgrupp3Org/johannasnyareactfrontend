import React, { useEffect, useState } from 'react'
import Budget from './Budget'
import './HomePage.css'
import LastTransaction from './LastTransaction'
import BigSavingGoal from './BigSavingGoal'


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
                setPurchaseData(data)
            })
            .catch((err) => {
                console.error(err);
            });
    }, [])
    return (
        <div className="fullPage">

            <div className="topPart">
                {budgetData ? <Budget data={budgetData} /> : "Laddar data.."}

            </div>
            <hr />
            <div className="LowerPart">
            <div className="LeftLowerPart">
                {purchaseData ? <LastTransaction data={purchaseData} /> : "Laddar data.."}
            </div>
            <div className="RightLowerPart">
                {budgetData ? <BigSavingGoal data={budgetData} /> : "Laddar data..."}
            </div>
            </div>
        </div>


    )
}
