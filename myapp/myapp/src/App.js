import React, { useState } from 'react';
import styled from 'styled-components';
import BasicSalaryInput from './components/BasicSalaryInput';
import EarningsInput from './components/EarningsInput';
import DeductionsInput from './components/DeductionsInput';
import SalaryCalculator from './components/SalaryCalculator';
import './styles.css';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f7f7f7;
  min-height: 100vh;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 48%;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const ResetButton = styled.button`
  background: none;
  border: none;
  color: #007BFF;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-left: 5px;
  }
`;

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
    <Container>
      <Card>
        <Title>Calculate Your Salary</Title>
        <BasicSalaryInput basicSalary={basicSalary} onChange={setBasicSalary} />
        <EarningsInput onAdd={handleAddEarning} />
        <DeductionsInput onAdd={handleAddDeduction} />
        <ResetButton onClick={handleReset}>
          Reset <i className="fas fa-sync-alt"></i>
        </ResetButton>
      </Card>
      <Card>
        <SalaryCalculator
          basicSalary={basicSalary}
          earnings={earnings}
          deductions={deductions}
        />
      </Card>
    </Container>
  );
}

export default App;
