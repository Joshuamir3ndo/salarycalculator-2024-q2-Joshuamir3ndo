import React from 'react';

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
    <div>
      <h2>Salary Details</h2>
      <p>Basic Salary: {basicSalary.toFixed(2)}</p>
      <p>Total Earnings: {totalEarnings.toFixed(2)}</p>
      <p>Total Deductions: {totalDeductions.toFixed(2)}</p>
      <p>EPF: {epfAmount.toFixed(2)}</p>
      <p>ETF: {etfAmount.toFixed(2)}</p>
      <h3>Take-Home Pay: {takeHomePay.toFixed(2)}</h3>
    </div>
  );
};

export default SalaryCalculator;
