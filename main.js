const form = document.querySelector("form");
const billInput = document.querySelector(".bill-input");
const tipPercents = document.querySelectorAll("input[name='tip-percent'");
const customTip = document.querySelector(".custom-tip");
const peopleInput = document.querySelector(".people-input");
const tipOutputValue = document.querySelector(".tip-output-value");
const totalOutputValue = document.querySelector(".total-output-value");

const calculate = () => {
  let tipAmount;
  let totalAmountPerPerson;
  let selectedTipPercent;
  let customTipValue = Number(customTip.value) / 100;
  for (const option of tipPercents) {
    if (option.checked) {
      selectedTipPercent = Number(option.value);
      console.log(selectedTipPercent);
    } else {
      selectedTipPercent = customTipValue;
    }

    let billInputValue = Number(billInput.value);
    let peopleInputValue = Number(peopleInput.value);
    tipAmount = (
      (billInputValue * selectedTipPercent) /
      peopleInputValue
    ).toFixed(2);

    tipOutputValue.textContent = `€${tipAmount}`;
    totalAmountPerPerson = (
      billInputValue / peopleInputValue +
      Number(tipAmount)
    ).toFixed(2);
    totalOutputValue.textContent = `€${totalAmountPerPerson}`;
  }
};

form.addEventListener("input", calculate);

function validate(s) {
  var rgx = /^[0-9]*\.?[0-9]*$/;
  return s.match(rgx);
}
