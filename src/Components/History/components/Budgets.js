import React from 'react'

const Budgets = () => {
    return (
        <>
            <div className="history-sidebar">
                <p>2021</p>
                <p>2020</p>
                <p>2019</p>
                <p>2018</p>
                <p>2017</p>
            </div>
            <div className="line2"></div>

            <div className="history-content">
                <h2>Budget för Maj</h2>
                <div className="from-to-date">
                    <p>2021-05-01</p>
                    <p>-</p>
                    <p>2021-05-31</p>
                </div>
            </div>
            <div className="history-table">
                <table>
                    <tr>
                        <th>Inkomster</th>
                        <th>Fasta Kostnader</th>
                        <th>Sparmål</th>
                        <th>Rörliga Kostnader</th>
                        <th>Totalt</th>
                        <th>Obudgeterat</th>
                    </tr>
                    <tr>
                        <td>36000</td>
                        <td>Skatt - 10800</td>
                        <td>Resa - 1000</td>
                        <td>Mat - 5000</td>
                        <td>17800</td>
                        <td>9 200 SEK</td>

                    </tr>

                    <tr>
                        <td></td>
                        <td>Hyra - 3000</td>
                        <td></td>
                        <td>Nöje - 3000</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Lån - 1000</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Fordon - 3000</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Budgets
