import React, { useEffect } from 'react'
import './HomePage.css'
import RegisterPurchaseModal from './RegisterPurchaseModal.js'

export default function LastTransaction(props) {

    useEffect(() => {

        console.log(props.data.purchase)

    }, [])


    return (

        <>

            <div className="lasttransaction__HeaderLabel_div">
                <label className="lasttransaction__BuyLabel_label">Senaste transaktionerna</label>

            </div>



            {props.data.purchase.map((x) =>
                <div className="lasttransaction__contentdiv">
                    <label className="lasttransaction__purchaseName_label">{x.köpNamn} </label>
                    <label className="lasttransaction__dateforpurchase_label">{x.pris}kr <label className="lasttransaction__priceforpurchase_label">{x.datum} </label></label>
                </div>
            )}
            <div className="lasttransaction__ButtonDiv">
                {/* <button className="btn" onClick={}>Lägg till köp</button> */}

                <RegisterPurchaseModal />
            </div>



        </>

    )
}
