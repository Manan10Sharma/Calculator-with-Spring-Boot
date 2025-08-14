document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('result');
    const historyList = document.getElementById('history-list');
    const buttons = document.querySelectorAll('.buttons button');
    const errorMessage = document.getElementById('error-message');

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    // Function to update the display
    function updateDisplay(value) {
        display.value = value;
    }

    // Function to clear everything
    function clear() {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('0');
        errorMessage.textContent = '';
    }

    // Function to perform a calculation via API call
    async function performCalculation() {
        if (!previousInput || !currentInput) {
            return;
        }

        try {
            const response = await fetch(`/api/calculate?num1=${previousInput}&num2=${currentInput}&operation=${operator}`, {
                method: 'POST'
            });
            const data = await response.json();

            if (data.error) {
                errorMessage.textContent = data.error;
                updateDisplay('Error');
            } else {
                errorMessage.textContent = '';
                updateDisplay(data.result);
                previousInput = data.result.toString();
                currentInput = '';
                operator = '';
                updateHistory();
            }
        } catch (error) {
            errorMessage.textContent = 'Calculation failed.';
            updateDisplay('Error');
            console.error('Error:', error);
        }
    }

    // Function to update the history list
    function updateHistory() {
        fetch('/')
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newHistoryList = doc.getElementById('history-list').innerHTML;
                historyList.innerHTML = newHistoryList;
            });
    }

    // Event listeners for all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;
            const op = button.dataset.operation;
            const buttonText = button.textContent;

            if (value === 'clear') {
                clear();
                return;
            }

            if (value === 'del') {
                if (currentInput.length > 0) {
                    currentInput = currentInput.slice(0, -1);
                    updateDisplay(currentInput || '0');
                }
                return;
            }

            if (op) { // Operator button
                if (currentInput) {
                    if (previousInput && operator) {
                        // If a previous operation exists, calculate it first (chained operations)
                        performCalculation().then(() => {
                            previousInput = display.value;
                            operator = op;
                            currentInput = '';
                            updateDisplay(previousInput + ' ' + buttonText);
                        });
                    } else {
                        previousInput = currentInput;
                        operator = op;
                        currentInput = '';
                        updateDisplay(previousInput + ' ' + buttonText);
                    }
                }
                return;
            }

            if (buttonText === '=') {
                performCalculation();
                return;
            }

            // Number or dot button
            currentInput += value;
            updateDisplay(currentInput);
        });
    });

    clear(); // Initial clear
});