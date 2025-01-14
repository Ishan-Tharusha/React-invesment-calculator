import { calculateInvestmentResults } from '../util/investment.js';

export default function Results ( {inputs} ) {

    const resultData = calculateInvestmentResults(inputs);
    console.log(resultData);

    return <p>Results...</p>
    
}