const result = document.getElementById('result');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const percent = document.getElementById('percent');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');
const equals = document.getElementById('equals');
const decimal = document.getElementById('decimal');

let operator = '';
let operand1 = null;
let operand2 = null;
let displayValue = '0';
let shouldResetDisplay = false;

function clearDisplay() {
    displayValue = '0';
    operand1 = null;
    operand2 = null;
    operator = '';
}

function updateDisplay() {
    result.value = displayValue;
}

function inputDigit(digit) {
    if (shouldResetDisplay) {
        displayValue = '';
        shouldResetDisplay = false;
    }
    displayValue = displayValue === '0' ? digit : displayValue + digit;
    updateDisplay();
}

function inputDecimal() {
    if (shouldResetDisplay) {
        displayValue = '0';
        shouldResetDisplay = false;
    }
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function handleOperator(newOperator) {
    const inputValue = parseFloat(displayValue);
    if (operand1 === null) {
        operand1 = inputValue;
    } else if (operator) {
        operand2 = inputValue;
        calculate();
        operand1 = result.value;
    } else {
        operand2 = inputValue;
    }
    operator = newOperator;
    shouldResetDisplay = true;
}

function calculate() {
    if (operator === '+') {
        displayValue = parseFloat(operand1) + parseFloat(operand2);
    } else if (operator === '-') {
        displayValue = parseFloat(operand1) - parseFloat(operand2);
    } else if (operator === '*') {
        displayValue = parseFloat(operand1) * parseFloat(operand2);
    } else if (operator === '/') {
        displayValue = parseFloat(operand1) / parseFloat(operand2);
    } else if (operator === '%') {
        displayValue = parseFloat(operand1) % parseFloat(operand2);
    }
    operand2 = null;
    updateDisplay();
}

clear.addEventListener('click', () => {
    clearDisplay();
    updateDisplay();
});

backspace.addEventListener('click', () => {
    if (displayValue.length === 1) {
        displayValue = '0';
    } else {
        displayValue = displayValue.slice(0, -1);
    }
    updateDisplay();
});

percent.addEventListener('click', () => {
    const inputValue = parseFloat(displayValue);
    displayValue = inputValue / 100;
    updateDisplay();
});

divide.addEventListener('click', () => {
    handleOperator('/');
});

multiply.addEventListener('click', () => {
    handleOperator('*');
});

subtract.addEventListener('click', () => {
    handleOperator('-');
});

add.addEventListener('click', () => {
    handleOperator('+');
});

equals.addEventListener('click', () => {
    if (operator && operand2 !== null) {
        calculate();
        operator = '';
    }
});

decimal.addEventListener('click', () => {
    inputDecimal();
});

for (let i = 0; i <= 9; i++) {
    const digit = document.getElementById(i.toString());
    digit.addEventListener('click', () => {
        inputDigit(i.toString());
    });
}
