import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
  const { initialInvesment, annuelInvesment, expectedReturn, duration } = input;

  // Map the input object to the expected parameter structure
  const resultData = calculateInvestmentResults({
    initialInvestment: initialInvesment,
    annualInvestment: annuelInvesment,
    expectedReturn: expectedReturn,
    duration: duration,
  });

  // Rename the local variable to avoid conflicts
  const baseInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - baseInvestment;
          const totalInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
