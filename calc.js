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