import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  font-size: 16px;
  color: #666;
`;

const HighlightedValue = styled(Value)`
  font-weight: bold;
  color: #000;
`;

const SalaryCalculator = ({ earnings, deductions, basicSalary }) => {
  // Calculate total earnings
  const totalEarnings = earnings.reduce((acc, curr) => acc + curr.amount, 0);

  // Calculate total deductions
  const totalDeductions = deductions.reduce((acc, curr) => acc + curr.amount, 0);

  // Calculate EPF and ETF
  const epfPercentage = 0.12;
  const etfPercentage = 0.03;
  const epfAmount = earnings.reduce((acc, curr) => {
    return acc + (curr.epfApplicable ? (curr.amount * epfPercentage) : 0);
  }, 0);
  const etfAmount = earnings.reduce((acc, curr) => {
    return acc + (curr.etfApplicable ? (curr.amount * etfPercentage) : 0);
  }, 0);

  // Calculate take-home pay
  const takeHomePay = basicSalary + totalEarnings - totalDeductions - epfAmount - etfAmount;

  return (
    <Container>
      <Title>Your Salary</Title>
      <Row>
        <Label>Basic Salary:</Label>
        <Value>{basicSalary.toFixed(2)}</Value>
      </Row>
      <Row>
        <Label>Gross Earning:</Label>
        <Value>{totalEarnings.toFixed(2)}</Value>
      </Row>
      <Row>
        <Label>Gross Deduction:</Label>
        <Value>{totalDeductions.toFixed(2)}</Value>
      </Row>
      <Row>
        <Label>Employee EPF (8%):</Label>
        <Value>- {epfAmount.toFixed(2)}</Value>
      </Row>
      <Row>
        <Label>APIT:</Label>
        <Value>- 0.00</Value>
      </Row>
      <Row>
        <Label>Net Salary (Take Home):</Label>
        <HighlightedValue>{takeHomePay.toFixed(2)}</HighlightedValue>
      </Row>
      <Title>Contribution from the Employer</Title>
      <Row>
        <Label>Employer EPF (12%):</Label>
        <Value>{(basicSalary * 0.12).toFixed(2)}</Value>
      </Row>
      <Row>
        <Label>Employer ETF (3%):</Label>
        <Value>{(basicSalary * 0.03).toFixed(2)}</Value>
      </Row>
      <Row>
        <Label>CTC (Cost to Company):</Label>
        <HighlightedValue>{(basicSalary + basicSalary * 0.15).toFixed(2)}</HighlightedValue>
      </Row>
    </Container>
  );
};

export default SalaryCalculator;
