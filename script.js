let display1 = document.querySelector("#display1");
let display2 = document.querySelector("#display2");
let Output = document.querySelector("#Output");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".method");
let equal = document.querySelector("#equal");
let mc = document.querySelector("#mc");
let double = document.querySelector("#double");
let displayOperator = document.querySelector("#displayOperator");

let num1 = "";
let num2 = "";
let method = null;

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (method === null) {
      num1 += button.innerText;
      display1.innerText = num1;
    } else {
      num2 += button.innerText;
      display2.innerText = num2;
    }
  });
});
double.addEventListener("click", () => {
  if (method === null) {
    num1 += double.innerText;
    display1.innerText = num1;
  } else {
    num2 += double.innerText;
    display1.innerText = num2;
  }
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1 !== "") {
      method = button.innerText;
      displayOperator.innerText = method;
    }
  });
});

equal.addEventListener("click", () => {
  if (num1 !== "" && num2 !== "" && method !== null) {
    let result;
    switch (method) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        result = num2 !== "0" ? parseFloat(num1) / parseFloat(num2) : "Error";
        break;
    }
    Output.innerText = result;
    num1 = "";
    num2 = "";
    method = null;
  }
});

mc.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  method = null;
  display1.innerText = "";
  display2.innerText = "";
  Output.innerText = "";
  displayOperator.innerText = "";
});
