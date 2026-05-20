let currentInput = '0';

function updateDisplay() {
  document.getElementById('display').textContent = currentInput;
}

function appendToDisplay(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function backspace() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = '0';
  }
  updateDisplay();
}

function calculate() {
  try {
    var result = Function('"use strict"; return (' + currentInput + ')')();
    if (result === Infinity || result === -Infinity || isNaN(result)) {
      currentInput = 'Error';
    } else {
      currentInput = String(result);
    }
  } catch (e) {
    currentInput = 'Error';
  }
  updateDisplay();
}
