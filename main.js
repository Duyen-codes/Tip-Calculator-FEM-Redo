// Queries
const billInput = document.querySelector(".bill");
const tipPercents = document.querySelectorAll("input[name='tip-percent'");
const customTip = document.querySelector(".custom");
const peopleInput = document.querySelector(".people");
const tipOutputValue = document.querySelector(".tip-output-value");
const totalOutputValue = document.querySelector(".total-output-value");

// Set default values for bill, people, selectedTipPercent
let bill = 0;
let selectedTipPercent = 0;
let people = 1;

let tipAmount;
let totalAmountPerPerson;
let customTipValue = Number(customTip.value / 100);

// get bill input
billInput.addEventListener("input", () => {
  bill = Number(billInput.value.replace(",", "."));
  calcTip();
  console.log(bill, typeof bill);
});

// get selectedTipPercent

tipPercents.forEach((tipPercent) => {
  tipPercent.addEventListener("click", () => {
    for (const option of tipPercents) {
      if (option.checked) {
        selectedTipPercent = Number(option.value);
        calcTip();
        console.log(
          "tipPercent: ",
          selectedTipPercent,
          typeof selectedTipPercent
        );
      } else {
        customTip.addEventListener("input", () => {
          selectedTipPercent = customTipValue;
          calcTip();
        });
      }
    }
  });
});

// get people input
peopleInput.addEventListener("input", () => {
  people = Number(peopleInput.value.replace(",", "."));
  calcTip();
  console.log("people: ", people);
});

function calcTip() {
  // calculate tip per person
  if (people >= 1) {
    const tipAmount = Number((bill * selectedTipPercent) / people);
    tipOutputValue.textContent = `€${tipAmount.toFixed(2)}`;

    // calculate total per person
    const totalAmountPerPerson = Number(bill / people + tipAmount);
    totalOutputValue.textContent = `€${totalAmountPerPerson.toFixed(2)}`;
    resetBtn.style.backgroundColor = "#26c2ae";
  }
}

// reset
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", function () {
  tipOutputValue.textContent = "$0.00";
  totalOutputValue.textContent = "$0.00";
  billInput.value = "";
  peopleInput.value = "";
  bill = 0;
  selectedTipPercent = 0;
  people = 1;
  resetBtn.style.backgroundColor = "#0d686d";
});
