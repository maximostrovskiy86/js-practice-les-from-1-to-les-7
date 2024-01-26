const refs = {
  valueColor: document.querySelector('.color'),
  buttonChangeColor: document.querySelector('.change-color'),
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onChangeBodyColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.valueColor.textContent = getRandomHexColor();
}

refs.buttonChangeColor.addEventListener("click", onChangeBodyColor);




