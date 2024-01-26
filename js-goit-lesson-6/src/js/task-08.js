const form = document.querySelector('.login-form');
const data = form.elements;

const reset = (elem) => {
    elem.value = '';
}

// function getDataFromForm() {
//     const data = form.querySelectorAll('input');
//
//         const dataArray = {}
//
//         data.forEach(elem => {
//             console.log("elem", elem)
//
//         if (elem.value === '') {
//             alert(`Field ${elem.name} not fill!!!`)
//         }
//
//         dataArray[elem.name] = elem.value;
//         reset(elem);
//     });
//
//     // console.log("dataArray", dataArray);
// }

function checkValidation() {

    data.forEach(elem => {
    if (elem.value === '') {
        alert(`Field ${elem.name} not fill!!!`)
        }
    });
}

const getDataFromForm = () => {
    const dataArray = {};

    dataArray[data.email.name] = data.email.value;
    dataArray[data.password.name] = data.password.value;

    console.log('dataArray', dataArray);

    reset();
}


const onChangeForm = (event) => {
    event.preventDefault();

    if (!checkValidation) {
        return;
    }

    getDataFromForm();
}

form.addEventListener('submit', onChangeForm);

