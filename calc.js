//Function for basic math operator
const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

//Created a variable to update the display later
let firstNumber = 3;
let operand = "+";
let secondNumber = 5;

//The function for calling the which operand to use to calculate.
const operator = function(firstNumber, operand, secondNumber) {
    if (operand == "+") {
        return add(firstNumber, secondNumber);
    } else if (operand == "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operand == "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operand == "/" ) {
        return divide(firstNumber, secondNumber);
    } else {
        return console.log("Invalid Operand")
    }
};

//The DOMs for the buttons and container
const container = document.querySelector(".div-container");
const reset = document.querySelector(".button-clear");
const buttonOperator = document.querySelectorAll(".button-operator");
const buttonNumber = document.querySelectorAll(".button-number");
const display = document.querySelector(".display");

//Event listener to display the number clicked
buttonNumber.forEach(button => {
button.addEventListener("click", function() {
    display.value += button.textContent
    });
});