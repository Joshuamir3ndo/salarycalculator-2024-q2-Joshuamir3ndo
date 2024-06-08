import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
    <div>
      <label htmlFor="basicSalary">Basic Salary:</label>
      <input
        type="number"
        id="basicSalary"
        value={basicSalary}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default BasicSalaryInput;
