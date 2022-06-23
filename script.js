//Global Variables 
const display = document.getElementById("display");
let value;
let newValue = 7;// remove after testing.
console.log(display);
console.log(value);
//Maths Functions
function add (value, newValue) {
    console.log( value + newValue );
}

function subtract (a, b) {
    console.log( a - b );
}

function multiply (a, b) {
    console.log( a * b );
}

function divide (a, b) {
    console.log( a / b );
}

//Operate Function
function operate (value, operator, newValue) {
    switch (operator) {
        case "+":
            add(value, newValue);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
        default: 
            console.log("You shouldn't see this");
    }
}

//Change calcs display and return the value for operating. 
function changeDisplay(val){
    if(value == undefined) {
        value = parseInt(val, 10);
        display.innerText = value;
        return value;
    } else {
        value = "" + value + parseInt(val, 10);
        display.innerText = value;
        value = parseInt(value, 10);
        return value;
    }
}

//Clear Calc and set value back to undefined.
function clearCalc() {
    value = undefined
    display.innerText = "";
    return value;
}

operate(10, "/", 10);