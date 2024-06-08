import React, { useState } from 'react';

const EarningsInput = ({ onAdd }) => {
  const [earningName, setEarningName] = useState('');
  const [earningAmount, setEarningAmount] = useState('');
  const [epfApplicable, setEpfApplicable] = useState(false);
  const [etfApplicable, setEtfApplicable] = useState(false);

  const handleAddEarning = () => {
    if (earningName && earningAmount && !isNaN(earningAmount) && parseFloat(earningAmount) >= 0) {
      const newEarning = {
        name: earningName,
        amount: parseFloat(earningAmount),
        type: 'earnings',
        epfApplicable,
        etfApplicable
      };
      onAdd(newEarning);
      setEarningName('');
      setEarningAmount('');
      setEpfApplicable(false);
      setEtfApplicable(false);
    }
  };

  return (
    <div>
      <label htmlFor="earningName">Name:</label>
      <input
        type="text"
        id="earningName"
        value={earningName}
        onChange={(e) => setEarningName(e.target.value)}
      />
      <label htmlFor="earningAmount">Amount:</label>
      <input
        type="number"
        id="earningAmount"
        value={earningAmount}
        onChange={(e) => setEarningAmount(e.target.value)}
      />
      <label htmlFor="epfApplicable">EPF Applicable:</label>
      <input
        type="checkbox"
        id="epfApplicable"
        checked={epfApplicable}
        onChange={(e) => setEpfApplicable(e.target.checked)}
      />
      <label htmlFor="etfApplicable">ETF Applicable:</label>
      <input
        type="checkbox"
        id="etfApplicable"
        checked={etfApplicable}
        onChange={(e) => setEtfApplicable(e.target.checked)}
      />
      <button onClick={handleAddEarning}>Add Earning</button>
    </div>
  );
};

export default EarningsInput;
