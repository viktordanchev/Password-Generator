const generateButton = document.querySelector("section button");
generateButton.addEventListener("click", generate);

function generate() {
  const uppercaseChecked = document.querySelector(
    ".checkboxes-form .uppercase-checkbox input"
  ).checked;
  const lowercaseChecked = document.querySelector(
    ".checkboxes-form .lowercase-checkbox input"
  ).checked;
  const numbersChecked = document.querySelector(
    ".checkboxes-form .numbers-checkbox input"
  ).checked;
  const symbolsChecked = document.querySelector(
    ".checkboxes-form .symbols-checkbox input"
  ).checked;
  const passLength = document.querySelector(".slider-form input").value;

  const uppercaseLetters = getUppercaseLetters();
  const lowercaseLetters = getLowercaseLetters();
  const numbers = getNumber();
  const symbols = getSymbol();

  const options = [];
  if (uppercaseChecked) {
    options.push("uppercase");
  }

  if (lowercaseChecked) {
    options.push("lowercase");
  }

  if (numbersChecked) {
    options.push("number");
  }

  if (symbolsChecked) {
    options.push("symbol");
  }

  let password = "";
  for (let index = 1; index <= passLength; index++) {
    const option = options[Math.floor(Math.random() * options.length)];
    let symbol = "";

    if (option === "uppercase") {
      symbol =
        uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    } else if (option === "lowercase") {
      symbol =
        lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    } else if (option === "number") {
      symbol = numbers[Math.floor(Math.random() * numbers.length)];
    } else if (option === "symbol") {
      symbol = symbols[Math.floor(Math.random() * symbols.length)];
    }

    password += symbol;
  }

  document.querySelector(".password-field input").value = password;
  spanField = password.length;
}

function getUppercaseLetters() {
  const uppercaseLetters = Array(26);

  for (let index = 0; index < uppercaseLetters.length; index++) {
    uppercaseLetters[index] = String.fromCharCode(65 + index);
  }

  return uppercaseLetters;
}

function getLowercaseLetters() {
  const lowerLetters = Array(26);

  for (let index = 0; index < lowerLetters.length; index++) {
    lowerLetters[index] = String.fromCharCode(97 + index);
  }

  return lowerLetters;
}

function getNumber() {
  const numbers = Array(10);

  for (let index = 0; index < numbers.length; index++) {
    numbers[index] = index;
  }

  return numbers;
}

function getSymbol() {
  const symbols = ["#", "@", "?", "!", "-", "$"];

  return symbols;
}
