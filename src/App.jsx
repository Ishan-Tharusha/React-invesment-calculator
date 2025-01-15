import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import { useState } from "react";

function App() {

  const [userInputs , setUserInput] = useState({
    initialInvesment: 12000,
    annuelInvesment: 1200,
    expectedReturn: 6,
    duration: 10,
});

const inputIsValid = userInputs.duration >= 1;

function handleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput =>{
      return{
          ...prevUserInput,
          [inputIdentifier]: +newValue
      };
  })
}

  return (
    <>
    <Header/>
    <UserInput userInput={userInputs} onChange={handleChange}/>
    {!inputIsValid && <p className="center">please enter a duration greater than zero</p>}
    {inputIsValid && <Results input={userInputs}/>}
    </>
  )
}

export default App
