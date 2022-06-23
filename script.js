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
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].classList.contains(`operator`)) {
                console.log("I am an operator!")
                inputOperator(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].classList.contains(`clear`)) {
                clearDisplay();
                updateDisplay();
            } else if (buttons[i].classList.contains(`equals`)) {
                equals()
                updateDisplay();
            } else if (buttons[i].classList.contains(`decimal`)) {
                inputDecimals(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].classList.contains(`sign`)) {
                inputSign(displayValue);
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

//Function for inputing operator and getting results
function inputOperator(operator) {
    if (firstOperator != null && secondOperator === null) {
        //This if handles the input of a second operator.
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        displayValue = accuratelyRound(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    } else if (firstOperand != null && secondOperator != null) {
        //Handles a 3rd operator.
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        secondOperator = operator;
        displayValue = accuratelyRound(result, 15).toString();
        firstOperand = displayValue;
        result = null;

    } else {
        //Handles 2nd Operator
        firstOperator = operator;
        firstOperand = displayValue;
    }
}

//Function for equals and getting results.
function equals () {
    //This if stops undefined showing if equals entered before an operator
    if (firstOperator === null) {
        displayValue = displayValue;
    } else if (secondOperator != null) { //This else if handles the final result. 
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        if (result === `don't / 0`) {
            displayValue = `don't / 0`;
        } else {
            displayValue = accuratelyRound(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } else {
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        if (result === `don't / 0`) {
            displayValue = `don't / 0`;
        } else {
            displayValue = accuratelyRound(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
};

//Function for inputing decimals.
function inputDecimals (dot) {
    if (displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = 0;
        displayValue += dot;
    } else if (!displayValue.includes(dot)) {
        displayValue += dot;
    }
};

//Function for sign 
function inputSign (num) {
    displayValue = (num * -1).toString();
};

//Clear display function / reset all variables 
function clearDisplay() {
    displayValue = 0;
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
};

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

//Round results accurately function to be called in other functions. 

function accuratelyRound(num, places) {
    return parseFloat(Math.round(num + `e` + places) + `e-` + places);
}