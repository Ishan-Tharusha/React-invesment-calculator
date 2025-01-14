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
    <Results inputs={userInputs}/>
    </>
  )
}

export default App
