const textValue = document.querySelector('#text');
const inputValue = document.querySelector('#font-size-control');

inputValue.addEventListener("input", () => {
    textValue.style.fontSize = `${inputValue.value}px`;
});
