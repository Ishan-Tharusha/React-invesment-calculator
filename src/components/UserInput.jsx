
export default function UserInput( {onChange , userInput} ) {
    
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Invesment</label>
                <input type="number" required 
                value={userInput.initialInvesment}
                onChange={(event)=>
                    onChange('initialInvesment' , event.target.value)}/>
            </p>
            <p>
                <label>Annuel Invesment</label>
                <input type="number" required 
                value={userInput.annuelInvesment}
                onChange={(event)=>
                    onChange('annuelInvesment' , event.target.value)}/>
            </p>
        </div>

        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required 
                value={userInput.expectedReturn}
                onChange={(event)=>
                    onChange('expectedReturn' , event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required 
                value={userInput.duration}
                onChange={(event)=>
                    onChange('duration' , event.target.value)}/>
            </p>
        </div>
    </section>
}