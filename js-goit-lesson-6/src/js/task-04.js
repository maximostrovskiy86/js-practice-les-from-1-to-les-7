let counterValue = 0;
let value = document.querySelector('#value');

const increment = document.querySelector('#counter button[data-action="increment"]')
const decrement = document.querySelector('#counter button[data-action="decrement"]')
// const increment = document.querySelector('#counter button.dataset.decrement')

const handleIncrementClick = () => {
    value.textContent = counterValue;
}

increment.addEventListener("click", handleIncrementClick)

decrement.addEventListener("click",() => {
    counterValue -= 1;
    value.textContent = counterValue;
});

