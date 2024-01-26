// task 4

const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],

    order(pizzaName, onSuccess, onError) {
        const { pizzas } = this;

        if (!pizzas.includes(pizzaName)) {
            return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
        }

        return onSuccess(pizzaName);

    },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
    return `Error! ${error}`;
}

// Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError))
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

// task 7
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line

    firstArray.forEach((elem, index, array) =>  {
        console.log("ELEM", elem)
        console.log("index", index)
        console.log("array", array)
        if (secondArray.includes(elem)) {
             commonElements.push(elem);
        }
    })



    return commonElements;
    // Change code above this line
}

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))

// task 13
function changeEven(numbers, value) {
    // Change code below this line
    const newArr = [];

    for (let i = 0; i < numbers.length; i += 1) {

        if (numbers[i] % 2 === 0) {
            newArr.push(numbers[i] + value);
            continue;
        }

        newArr.push(numbers[i]);
    }

    return newArr;
    // Change code above this line
}

// console.log(changeEven([17, 24, 68, 31, 42], 100))

// task 14
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(elem => elem.length);
// console.log("planetsLengths", planetsLengths)

// task 16
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism"],
//     },
// ];
// Change code below this line

// const genres = books.flatMap(elem => elem.genres);

// task 19
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line


const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !==0);

// task20
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((uniqueGenre, index, array) => array.indexOf(uniqueGenre) === index);
// console.log(uniqueGenres)

// task23

const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(user => user.age >= minAge && user.age <= maxAge)
};

// console.log(getUsersWithAge(users, 24, 37))

// task24
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
    // return users.filter(user => user.friends.find(user => user === friendName));
};

// console.log(getUsersWithFriend())

// task 25
// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ]

const getFriends = (users) => {
    const allFriends = users.flatMap((user) => user.friends);

    return allFriends.filter((user, index, array) => array.indexOf(user) === index);
}
// console.log(getFriends(users))

// task 26
const getActiveUsers = (users) => {
    return users.filter(user => user.isActive)
};

// task 31, 32
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(elem => elem % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(elem => elem % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(elem => elem % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(elem => elem % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(elem => elem % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(elem => elem % 2 !== 0);

const anyElementInFirstIsEven = firstArray.some(elem => elem % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(elem => elem % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(elem => elem % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(elem => elem % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(elem => elem % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(elem => elem % 2 !== 0);

// task 34
// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line
//
// const totalPlayTime = playtimes.reduce((sum, number, currentIndex) => {
//     console.log("currentIndex", currentIndex," - SUM", sum)
//     return sum + number
// });
// const averagePlayTime = totalPlayTime / playtimes.length;

// task 35

const players = [
        { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((totalTime, {playtime, gamesPlayed, name}, index) => {
    // console.log("index", index, "- name", name)
    return totalTime + playtime / gamesPlayed;
}, 0);

// console.log("totalAveragePlaytimePerGame", totalAveragePlaytimePerGame)
// task 36

const calculateTotalBalance = users => {
    return users.reduce((total, user) => total + user.balance, 0)
};

const getTotalFriendCount = users => {
    const allFriends = users.flatMap(user => user.friends).reduce((totalUsers, user, index, array ) => array.length)

    return allFriends;
};

// console.log(getTotalFriendCount(users))

// task 38/
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
// ];
// // Change code below this line
//
// const ascendingReleaseDates = [...releaseDates].sort();
//
// const alphabeticalAuthors = [...authors].sort()
// console.log(ascendingReleaseDates)


// task 39
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) => {
    // console.log("A", a, "B", b)
    return a - b;
});

const descendingReleaseDates = [...releaseDates].sort((a, b, index) => b - a);
// console.log(releaseDates)
// console.log(ascendingReleaseDates)
// console.log(descendingReleaseDates)

// task 40
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
// ];
// // Change code below this line
//
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
//
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// task 41
const books_1 = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
        balance: 2811,
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
        balance: 2611,
    },
    {
        title: "The Dream of a Ridiculous Man",
        author: "Fyodor Dostoevsky",
        rating: 7.75,
        balance: 2111,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books_1].sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author));
const sortedByReversedAuthorName = [...books_1].sort((firstAuthor, secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author));
const sortedByAscendingRating = [...books_1].sort((a, b) => a.rating - b.rating);
const sortedByDescentingRating = [...books_1].sort((a, b) => b.rating - a.rating);


// task 42
const sortByAscendingBalance = users => [...users].sort((a, b) => a.balance - b.balance);


// task 43
const sortByDescendingFriendCount = users => {
    return [...users].sort((a, b) => b.friends.length - a.friends.length)
}

const sortByName = users => {
    return [...users].sort((a, b) => a.name.localeCompare(b.name))
};

// console.log(sortByName(users))

const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
    },
    {
        title: "The Dream of a Ridiculous Man",
        author: "Fyodor Dostoevsky",
        rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
        title: "The Dreams in the Witch House",
        author: "Howard Lovecraft",
        rating: 8.67,
    },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books.filter(book => book.rating > MIN_BOOK_RATING).sort((a, b) => a.author.localeCompare(b.author)).map(user => user.author);
// console.log("NAMES", names)

// task 46
const getNamesSortedByFriendCount = users => {
        return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)
};

// task47
const getSortedFriends = users => {
        return users.flatMap(elem => elem.friends).filter((friend, index, array) => array.indexOf(friend) === index).sort((a, b) => a.localeCompare(b));
};

// task 48

const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
]

const getTotalBalanceByGender = (users, gender) => users.filter(user => user.gender === gender).reduce((total, { balance }) => total + balance, 0)
// console.log(getTotalBalanceByGender(users, 'male'))


// closer

const fnA = () => {
    const innerValue = "Значение внутренней переменной fnA"

    const innerFunction = () => {
        console.log('innerValue', innerValue)
        console.log('Это вызов innerFunction')
    }

    return innerFunction;
}

const fnB = fnA();

fnB();

function classicFn (a, b, x, c) {
    console.log(arguments)

    return a +b +x +c;
}

console.log(classicFn(2,2,3,5))

const arrowFn = (...args) => {
    console.log('args', args)

    return args;
}

console.log(arrowFn(2,2,3,5))





