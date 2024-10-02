import { useState } from 'react'

import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleUserInputs(inputIdentifier, inputValue){
    setUserInput((prevUserInputs) => {
        return {
            ...prevUserInputs,
            [inputIdentifier]: +inputValue
        };
    });
  };

  return (
    <>
      <Header />

      <UserInputs userInput={userInput} handleUserInputs={handleUserInputs} />

      {!inputIsValid && <p className='center'>Please enter Duration greater than zero</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  )
}

export default App
