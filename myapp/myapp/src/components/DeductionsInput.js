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
    <Container>
      <Label htmlFor="deductionName">Name:</Label>
      <Input
        type="text"
        id="deductionName"
        value={deductionName}
        onChange={(e) => setDeductionName(e.target.value)}
        placeholder="Enter deduction name"
      />
      <Label htmlFor="deductionAmount">Amount:</Label>
      <Input
        type="number"
        id="deductionAmount"
        value={deductionAmount}
        onChange={(e) => setDeductionAmount(e.target.value)}
        placeholder="Enter deduction amount"
      />
      <AddNewLink onClick={handleAddDeduction}>+ Add New Deduction</AddNewLink>
    </Container>
  );
};

export default DeductionsInput;
