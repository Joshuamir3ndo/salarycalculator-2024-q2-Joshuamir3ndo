import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
`;

const AddNewLink = styled.button`
  background: none;
  border: none;
  color: #007BFF;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

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
    <Container>
      <Label htmlFor="earningName">Name:</Label>
      <Input
        type="text"
        id="earningName"
        value={earningName}
        onChange={(e) => setEarningName(e.target.value)}
        placeholder="Enter earning name"
      />
      <Label htmlFor="earningAmount">Amount:</Label>
      <Input
        type="number"
        id="earningAmount"
        value={earningAmount}
        onChange={(e) => setEarningAmount(e.target.value)}
        placeholder="Enter earning amount"
      />
      <Label htmlFor="epfApplicable">EPF Applicable:</Label>
      <input
        type="checkbox"
        id="epfApplicable"
        checked={epfApplicable}
        onChange={(e) => setEpfApplicable(e.target.checked)}
      />
      <Label htmlFor="etfApplicable">ETF Applicable:</Label>
      <input
        type="checkbox"
        id="etfApplicable"
        checked={etfApplicable}
        onChange={(e) => setEtfApplicable(e.target.checked)}
      />
      <AddNewLink onClick={handleAddEarning}>+ Add New Allowance</AddNewLink>
    </Container>
  );
};

export default EarningsInput;
