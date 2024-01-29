let monthlyPayment = 0;
window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amntInput = document.getElementById("loan-amount");
  amntInput.value = "30000";
  const yrsInput = document.getElementById("loan-years");
  yrsInput.value = "5";
  const rateInput = document.getElementById("loan-rate");
  rateInput.value = "5.99";
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  const calculatedMonthlyPayment = calculateMonthlyPayment(currentValues);
  updateMonthly(calculatedMonthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  console.log(values);
  const amnt = values.amount;
  const periodicInterestRate =(values.rate / 100) / 12;
  const nbrOfPayments =  Math.floor(values.years * 12);
  monthlyPayment = ((amnt * periodicInterestRate) / (1 - Math.pow((1 + periodicInterestRate), -nbrOfPayments))).toFixed(2);
  return monthlyPayment;
   }

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentSpan = document.querySelector("#monthly-payment");
  monthlyPaymentSpan.innerText = monthly + "$";
}
