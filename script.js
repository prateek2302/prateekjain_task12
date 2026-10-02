// Compound Interest Calculation

// Static input variables
const principal = 10000;    // P: Principal amount in currency units
const annualRate = 0.08;   // r: Annual interest rate (8% expressed as a decimal)
const compoundsPerYear = 1; // n: Number of times interest is compounded per year (annually)
const timeInYears = 3;      // t: Time duration in years

// Formula: A = P * (1 + r/n)^(n*t)
const totalAmount = principal * Math.pow(1 + annualRate / compoundsPerYear, compoundsPerYear * timeInYears);

// Compound Interest (CI) earned = Total Amount - Principal
const compoundInterest = totalAmount - principal;

// Output to the browser console as requested in the assignment
console.log(`The compound interest after ${timeInYears} years is: ${compoundInterest.toFixed(2)}`);

// Optional: Display result on the web page for browser testing
window.addEventListener("DOMContentLoaded", () => {
  const resultElement = document.getElementById("output");
  if (resultElement) {
    resultElement.textContent = `The compound interest after ${timeInYears} years is: ${compoundInterest.toFixed(2)}`;
  }
});