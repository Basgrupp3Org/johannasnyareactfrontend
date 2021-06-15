import React, { useEffect, useState } from 'react'
import Budget from './BudgetComponent'


export default function HomePage() {

    const [budgetData, setBudgetData] = useState([]);

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
    return (
        <div>
          
                {budgetData ? <Budget data={budgetData} /> : "https://jsonlint.com/"}
                <hr/>
        </div>
    )
}
