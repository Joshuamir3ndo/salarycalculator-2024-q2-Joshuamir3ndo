import React, { useState } from 'react';

import BasicSalaryInput from './components/BasicSalaryInput';
import EarningsInput from './components/EarningsInput';
import DeductionsInput from './components/DeductionsInput';
import SalaryCalculator from './components/SalaryCalculator';
import './styles.css';

function App() {
  const [basicSalary, setBasicSalary] = useState(0);
  const [earnings, setEarnings] = useState([]);
  const [deductions, setDeductions] = useState([]);

  const handleAddEarning = (earning) => {
    setEarnings([...earnings, earning]);
  };

  const handleAddDeduction = (deduction) => {
    setDeductions([...deductions, deduction]);
  };

  const handleReset = () => {
    setBasicSalary(0);
    setEarnings([]);
    setDeductions([]);
  };
  

  return (
    <div className="app">
      <h1>Salary Calculator</h1>
      <BasicSalaryInput basicSalary={basicSalary} onChange={setBasicSalary} />
      <div className="inputs-container">
        <div className="inputs">
          <div className="earnings-deductions">
            <EarningsInput onAdd={handleAddEarning} />
            <DeductionsInput onAdd={handleAddDeduction} />
          </div>
        </div>
        <div className="salary-details-container">
          <SalaryCalculator
            basicSalary={basicSalary}
            earnings={earnings}
            deductions={deductions}
          />
        </div>
      </div>
      <button className="reset-button" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;

