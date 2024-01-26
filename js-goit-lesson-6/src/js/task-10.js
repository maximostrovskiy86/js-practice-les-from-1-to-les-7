function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnClear: document.querySelector('button[data-destroy]'),
  box: document.querySelector('#boxes'),
}

function handleDivAdd() {
  const number = Number(refs.input.value);
  const createDiv = createBoxes(number);

  refs.box.append(...createDiv);
}

function createBoxes(amount) {
  let divSize = 30;
  const elemCollection = [];

  for (let elem = 0; elem < amount; elem += 1) {
    const div = document.createElement('div');
    divSize += 10;
    div.style.cssText = `
        width: ${divSize + 'px'};
        height: ${divSize + 'px'};
        margin: 10px;
        `;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '5px';
    elemCollection.push(div)
  }

  return elemCollection;
}

const destroy = () => {
  refs.box.innerHTML = '';
}

refs.btnCreate.addEventListener("click", handleDivAdd);
refs.btnClear.addEventListener("click", destroy);






