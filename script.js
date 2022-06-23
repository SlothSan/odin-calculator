//Global Variables. 
let displayValue = 0 //Return this to update the display in further functions. 
const buttons = document.querySelectorAll(`button`);
let firstOperand = null;
let firstOperator = null;
let secondOperand = null;
let secondOperator = null;
let result = null;


//Function to update the display. 
function updateDisplay() {
    const display = document.getElementById(`display`);
    display.innerText = displayValue;
    if (displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}

updateDisplay();

//function to add eventListeners to all buttons
function addEventButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener(`click`, function() {
            if (buttons[i].classList.contains(`operand`)) {
                console.log("I am an operand!")
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].classList.contains(`operator`)) {
                inputOperator(buttons[i].value);
            } else if (buttons[i].classList.contains(`clear`)) {
                clearDisplay();
                updateDisplay();
            }
        });
    }
}

addEventButtons();

//Function for inputing operands. 
function inputOperand(operand){
    if (firstOperator === null) {
        if(displayValue === `0` || displayValue === 0) {
            displayValue = operand;
        } else if (displayValue === firstOperand){
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        if(displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
};


function inputOperator() {
    if (firstOperator != null && secondOperator === null) {
        //This if handles the input of a second operator.
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        displayValue = 
    }
}










//Clear display function / reset all variables 
function clearDisplay() {
    displayValue = 0;
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

//operate function to be called in other functions 
function operate (a, b, op) {
    if (op === "+") {
        return a + b;
    } else if (op === "-") {
        return a - b;
    } else if (op === "/") {
        if (b === 0) {
            return `don't / 0`
        } else {
            return a / b;
        }
    } else if (op === "*") {
        return a * b;
    }
};