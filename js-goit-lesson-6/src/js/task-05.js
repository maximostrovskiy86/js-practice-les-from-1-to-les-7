const input = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');

const makeSpanText = () => {
    spanText.textContent = input.value;

    if (!input.value) {
        spanText.textContent = 'Anonymous';
    }
}

input.addEventListener('input', makeSpanText);

// const refs = {
//     getValueInput: document.querySelector('#name-input'),
//     setValueSpan: document.querySelector('#name-output'),
// }
//
// const makeValueInput = () => {
//     refs.setValueSpan.textContent = refs.getValueInput.value;
//
//     if (!refs.getValueInput.value) {
//         refs.setValueSpan.textContent = 'незнакомец';
//     }
// }
//
// refs.getValueInput.addEventListener('input', makeValueInput);