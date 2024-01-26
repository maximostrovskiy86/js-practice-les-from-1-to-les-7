// task 3 ранний возврат
function checkStorage(available, ordered) {
    // Change code below this line

    if (ordered === 0) {
        return "Your order is empty!";
    }

    if (ordered > available) {
        return  "Your order is too large, not enough goods in stock!";
    }

    return  "The order is accepted, our manager will contact you";

    // Change code above this line
}

// task 8
// tasks with arrays

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// task10 split
function splitMessage(message, delimiter) {
    let words;
    // Change code below this line
    words = message.split(delimiter)
    // Change code above this line
    return words;
}

// console.log(splitMessage('message', ''));


function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
    const arr = message.split(' ');

    // console.log(arr)
    // console.log(arr.length)
    return arr.length * pricePerWord;
    // Change code above this line
}

// calculateEngravingPrice("Web-development is creative work", 40);

// task 14 arr.slice()
function makeNewArrayWithHelpSlice() {
    const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
    console.log('fruits', fruits)
// Change code below this line
    const firstTwoEls = fruits.slice(0, 2);
    console.log("firstTwoEls", firstTwoEls);
    const nonExtremeEls = fruits.slice(1, -1);
    console.log("nonExtremeEls", nonExtremeEls);
    const lastThreeEls = fruits.slice(-3);
    console.log("lastThreeEls", lastThreeEls);
}

// makeNewArrayWithHelpSlice();

// task 15 concat

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
//
// const allClients = oldClients.concat(newClients);
// console.log(oldClients, allClients)


// task 16
const firstArray = ['apple', 'plum', 'pear'];
const secondArray = ['orange', 'banana', 'sick'];
function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    const arr = firstArray.concat(secondArray)

    return (arr.length < maxLength) ? arr : arr.slice(0, maxLength)

    // Change code above this line
}

// console.log(makeArray(firstArray, secondArray, 2))
// task 18

function calculateTotal(number) {
    // Change code below this line
    let total = 0;

    for (let i = 1; i <= number; i += 1) {
        total += i
    }
    console.log(total)
    return total;
    // Change code above this line
}

// calculateTotal(3)

// task 20
function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
    for (let i = 0; i < order.length; i += 1) {
        total += order[i];
    }
    // Change code above this line
    return total;
}

// task 21
function findLongestWord(string) {
    // Change code below this line
    const arr = string.split(' ');
    let mostLongWord = arr[0];

    // for (let i= 0; i < arr.length; i += 1) {
    //     if (mostLongWord.length <  arr[i].length) {
    //         mostLongWord = arr[i];
    //     }
    // }

    for (const mostLongWordElement of arr) {
        if (mostLongWordElement.length > mostLongWord.length ) {
            mostLongWord = mostLongWordElement;
        }
    }

    return mostLongWord;
    // Change code above this line
}

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


// task 22
function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
    for (let i = min; i <= max; i +=1) {
        numbers.push(i);
    }
    // Change code above this line
    return numbers;
}

// console.log(createArrayOfNumbers(3, 9))

// task 23
function filterArray(numbers, value) {
    // Change code below this line
    let newArr = [];

    for (const newArrElement of numbers) {
       if ( newArrElement > value) {
           newArr.push(newArrElement)
       }
    }

 return newArr;
    // Change code above this line
}

// console.log(filterArray([1, 2, 3, 4, 5, 6, 8], 7))

// task 25

function getCommonElements(array1, array2) {
    // Change code below this line
    const arr = [];

    for (const elem_1 of array1) {
        if (array2.includes(elem_1)) {
            arr.push(elem_1)
        }
    }

    // for (const elem_1 of array1) {
    //     for (const elem_2 of  array2) {
    //         if (elem_1 === elem_2) {
    //             arr.push(elem_2)
    //         }
    //     }
    // }

    return arr;
    // Change code above this line
}

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))


// task 32
function includes(array, value) {
    let isQuestion = false;

    for (const number of array) {
        if (number === value) {
            isQuestion = true;
            break;
        }
    }

    return isQuestion;
}

console.log(includes([1, 2, 7, 4, 5], 4));