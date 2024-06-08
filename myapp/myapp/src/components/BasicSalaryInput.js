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

const BasicSalaryInput = ({ onChange }) => {
  const [basicSalary, setBasicSalary] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && parseFloat(value) >= 0) {
      setBasicSalary(value);
      onChange(parseFloat(value));
    }
  };

  return (
    <Container>
      <Label htmlFor="basicSalary">Basic Salary:</Label>
      <Input
        type="number"
        id="basicSalary"
        value={basicSalary}
        onChange={handleInputChange}
        placeholder="Enter your basic salary"
      />
    </Container>
  );
};

export default BasicSalaryInput;
