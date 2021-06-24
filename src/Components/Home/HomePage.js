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
        <div className="homepage__fullPage_div">

            <div className="homepage__topPart_div">
                {budgetData ? <Budget data={budgetData} /> : "Laddar data.."}

            </div>
            <hr />
            <div className="homepage__LowerPart_div">
                <div className="homepage__LeftLowerPart_div">
                    {purchaseData ? <LastTransaction data={purchaseData} /> : "Laddar data.."}
                </div>
                <div className="homepage__RightLowerPart_div">
                    {budgetData ? <BigSavingGoal data={budgetData} /> : "Laddar data..."}
                </div>
            </div>
        </div>


    )
}
