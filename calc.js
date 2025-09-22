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
    } else if (operand == "*" || operand == "X") {
        return multiply(firstNumber, secondNumber);
    } else if (operand == "/" || operand == "÷") {
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

//storing the value of the number button
let firstSelection;
let operandUsed;
let secondSelection;

//The AC button to clear the display
reset.addEventListener("click", () => {
        display.value = "";
    })

//Event listener to display the number clicked
buttonNumber.forEach(button => {
button.addEventListener("click", function() {
    display.value += button.textContent;
    });
});

//Event listener for the operator button
buttonOperator.forEach(button => {
    button.addEventListener("click", function() {
        // To store and calculate with the display
        //If the equal button is pressed
        if (button.textContent == "=") {
            //Get the second number from the display
            secondSelection = Number(display.value);
            //perform the calculation and show the display
            display.value = operator(firstSelection, operandUsed, secondSelection);
        } else {
            //if the operator used is "+, -, / , x"
            // Assigns the value when the operator is clicked
            firstSelection = Number(display.value);
            // Clears the display after clicking the button
            display.value = "";
            // Store the value of the operator clicked the button
            operandUsed = button.textContent;
        }
    });
});