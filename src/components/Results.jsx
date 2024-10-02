import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Results({ userInput }) {
    let resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
    let data = resultsData.map((v, i) => {
        const totalInterest = v.valueEndOfYear - v.annualInvestment * v.year - initialInvestment;
        const totalAmountInterest = v.valueEndOfYear - totalInterest;
        return (
            <tr key={i}>
                <td>{v.year}</td>
                <td>{formatter.format(initialInvestment)}</td>
                <td>{formatter.format(v.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInterest)}</td>
            </tr>
        );
    })
    return (
        <section>
            <table id='result'>
                <thead className='center'>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody className='center'>
                    {data}
                </tbody>
            </table>
        </section>
    )
}
