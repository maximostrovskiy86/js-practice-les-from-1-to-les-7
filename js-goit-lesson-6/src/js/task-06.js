const refs = {
    input: document.querySelector('#validation-input'),
}

const onInputChange = () => {
    if (Number(refs.input.dataset.length) === Number(refs.input.value.length)) {
        refs.input.classList.add('valid');
        refs.input.classList.remove('invalid')
    } else  {
        refs.input.classList.add('invalid')
        refs.input.classList.remove('valid')
    }
}

refs.input.addEventListener('input', onInputChange);

