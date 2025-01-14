import { useState } from "react"

export default function UserInput() {
    const [userInputs , setUserInputs] = useState({
        initialInvesment: 12000,
        annuelInvesment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue) {
        
    }

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Invesment</label>
                <input type="number" required/>
            </p>
            <p>
                <label>Annuel Invesment</label>
                <input type="number" required/>
            </p>
        </div>

        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required/>
            </p>
        </div>
    </section>
}