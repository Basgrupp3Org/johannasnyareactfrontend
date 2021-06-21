import React, { useEffect } from 'react'
import './HomePage.css'
import RegisterPurchaseModal from './RegisterPurchaseModal.js'

export default function LastTransaction(props) {

    useEffect(() => {

        console.log(props.data.purchase)

    }, [])


    return (

        <>
        
        <div className="HeaderLabel">
        <label className="BuyLabel">Senaste transaktionerna</label>

        </div>
           
{/* 

             {props.data.purchase.map((x) =>
                <div>
                    <label className="purchaseName">{x.köpNamn} </label> 
                    <label className="dateforpurchase">{x.pris}kr <label className="priceforpurchase">{x.datum} </label></label>
                </div>
            )}  */}
            <div className="ButtonDiv">
            {/* <button className="btn" onClick={}>Lägg till köp</button> */}

            <RegisterPurchaseModal />
            </div>

            

        </>
      
    )
}
