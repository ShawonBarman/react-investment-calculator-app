import React from 'react'


export default function UserInputs({userInput, handleUserInputs}) {

    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type='number' onChange={(e) => handleUserInputs('initialInvestment', e.target.value)} value={userInput.initialInvestment} required />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type='number' onChange={(e) => handleUserInputs('annualInvestment', e.target.value)} value={userInput.annualInvestment} required />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>Expected Return</label>
                    <input type='number' onChange={(e) => handleUserInputs('expectedReturn', e.target.value)} value={userInput.expectedReturn} required />
                </p>
                <p>
                    <label>Duration</label>
                    <input type='number' onChange={(e) => handleUserInputs('duration', e.target.value)} value={userInput.duration} required />
                </p>
            </div>
        </section>
    )
}
