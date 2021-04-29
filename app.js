const firstInput = document.getElementById('first-input');
const secondInput = document.getElementById('second-input');
const answer = document.getElementById('equals');
const answers = document.getElementById('result');
const action = document.getElementById('sign');
const calculations = document.getElementById('counter');
let count = 0;
answer.addEventListener('click', () => {
    if (action.value == "+") {
        answers.textContent = Number(firstInput.value) + Number(secondInput.value);
        count++;
    }
    if (action.value == '-') {
        answers.textContent = Number(firstInput.value) - Number(secondInput.value);
        count++;
    }
    if (action.value == '*') {
        answers.textContent = Number(firstInput.value) * Number(secondInput.value);
        count++;
    }
    if (action.value == '/') {
        answers.textContent = Number(firstInput.value) / Number(secondInput.value);
        count++;
    }
    calculations.textContent = Number(count);
});