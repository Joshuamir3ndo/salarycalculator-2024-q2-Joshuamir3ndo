import React, { useState } from 'react';

const DeductionsInput = ({ onAdd }) => {
  const [deductionName, setDeductionName] = useState('');
  const [deductionAmount, setDeductionAmount] = useState('');

  const handleAddDeduction = () => {
    if (deductionName && deductionAmount && !isNaN(deductionAmount) && parseFloat(deductionAmount) >= 0) {
      const newDeduction = {
        name: deductionName,
        amount: parseFloat(deductionAmount),
        type: 'deductions'
      };
      onAdd(newDeduction);
      setDeductionName('');
      setDeductionAmount('');
    }
  };

  return (
    <div>
      <label htmlFor="deductionName">Name:</label>
      <input
        type="text"
        id="deductionName"
        value={deductionName}
        onChange={(e) => setDeductionName(e.target.value)}
      />
      <label htmlFor="deductionAmount">Amount:</label>
      <input
        type="number"
        id="deductionAmount"
        value={deductionAmount}
        onChange={(e) => setDeductionAmount(e.target.value)}
      />
      <button onClick={handleAddDeduction}>Add Deduction</button>
    </div>
  );
};

export default DeductionsInput;
