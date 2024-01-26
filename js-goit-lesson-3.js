// Objects


// task 5
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };
//
// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line


// task 6
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };
//
// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// }

// task 9 computed proppertis
// const emailInputName = "email";
// const passwordInputName = "password";
//
// const credentials = {
//     // Change code below this line
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
//     // Change code above this line
// };

// task 10
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

for (key in apartment) {
    values.push(apartment[key]);
    keys.push(key)
}

// console.log('keys: ', keys, 'values: ', values)


// TASK 19

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];
//
// function getAllPropValues(propName) {
//     // Change code below this line
//     const names = [];
//
//     for (let product of products) {
//         const nameArray = Object.keys(product)
//
//         console.log("nameArray", nameArray)
//         for (const keyArr of nameArray) {
//             if (propName === keyArr) {
//                 names.push(product[keyArr])
//             }
//
//         }
//
//     }
//
//     return names;
//
//     // Change code above this line
// }
//
// console.log(getAllPropValues("price"));

// task 20

const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    // Пиши код ниже этой строки
    let totalPrice = 0;

    for (const productNameElement of products) {
        if (productNameElement.name === productName) {
            totalPrice = productNameElement.price * productNameElement.quantity;
        }
    }

    return totalPrice;
    // Пиши код выше этой строки
}

// console.log(calculateTotalPrice("Radar"));

// task 24
const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
};
// Change code below this line

const {
    yesterday: highYesterday,
    icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
    today: highToday,
    tomorrow: highTomorrow,
} = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// task 25
const forecast = {
    today: {
        low: 28,
        high: 32,
        icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
    },
    tomorrow: {
        low: 27,
        high: 31,
        icon: 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
    },
};
// Change code below this line

// const {
//     today: {
//         high: highToday,
//         low: lowToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//     },
//     tomorrow: {
//         low: lowTomorrow,
//         high: highTomorrow,
//         icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
//     }
// } = forecast;

// task 41
const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],

    getPotions() {
        return this.potions;
    },

    addPotion(newPotion) {
        for (const potion of this.potions) {

            if (potion.name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
        }

        this.potions.push(newPotion);
    },



    removePotion(potionName) {
        const { potions } = this;

        for (let i = 0; i < potions.length; i++) {
            if (potions[i].name === potionName) {
                this.potions.splice(i, 1);
            }
        }

        return `Potion ${potionName} is not in inventory!`;
    },


    updatePotionName(oldName, newName) {
        const { potions } = this;

        for (let i = 0; i < potions.length; i++) {
            if (potions[i].name === oldName) {
                potions[i].name = newName;
            }
        }

        return `Potion ${oldName} is not in inventory!`;

    },
    // Change code above this line
};

console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }))
// console.log(atTheOldToad.addPotion({ name: 'Dran breh', price: 7780 }))
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log(atTheOldToad.removePotion('Speed potion'));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'))

//task 11
const advert = {
    service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

//task 11
function countProps(object) {
    let propCount = 0;
    // Change code below this line

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            propCount += 1;
        }
    }

    // Change code above this line
    return propCount;
}

//task 13
const apartments = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};
const values = [];

const keys = Object.keys(apartment)

for (const key of keys) {
    values.push(apartments[key])
}

//task 18
const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
    // Change code below this line

    for (const product of products) {
        if (productName === product.name) return product.price;
    }

    return null;

    // Change code above this line
}

// tsak 19?
const productS = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
    // Change code below this line
    const names = [];

    const keys = Object.values(productS)
    console.log('keys: ', keys);
    for (let key of keys) {
        console.log('key: ', key);
        if (propName === key) {


            names.push(product.name);
        }

        // return names;
    }
    console.log(names);
    // return [];
    // Change code above this line
}

// getAllPropValues("price")

//task 26
// Change code below this line
function calculateMeanTemperature(forecast) {

    const {
        today: { low: todayLow, high:todayHigh, },
        tomorrow: { low: tomorrowLow, high:tomorrowHigh, }
        // Change code above this line
    } = forecast;

    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// task 30
function makeTask(data) {
    const completed = false;
    const category = "General";
    const priority = "Normal";
    // Change code below this line
    // const { text, category, priority} = data;
    const newData = {

        completed,
        category,
        priority,
        ...data,
    }

    return newData;

    // Change code above this line
}

// task 31
// Change code below this line
function add(...args) {
    let total = 0;

    for (let val of args) {
        total += val;
    }

    return total;
    // Change code above this line
}

// console.log(add(12, 4, 11, 48));
// add(12, 4, 11, 48);

// task 32

// Change code below this line
function addOverNum(firstArg, ...args) {
    let total = 0;

    for (const arg of args) {
        if (firstArg < arg) {
            total += arg;
        }

    }

    return total;
    // Change code above this line
}

// task 33
// Change code below this line
function findMatches(firstArg, ...args) {
    const matches = []; // Don't change this line

    for (const arg of args) {
        if (firstArg.includes(arg)) {
            matches.push(arg);
        }
    }

    // Change code above this line
    return matches;
}

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// task 35
const bookShelf = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],
    updateBook(oldName, newName) {
        // Change code below this line
        const replaceBookIndex = this.books.indexOf(oldName)
        this.books.splice(replaceBookIndex, 1,  newName)
        // this.books.splice(this.books.indexOf(oldName), 1,  newName)
        // Change code above this line
    },
};


// task39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//
//     const index = this.potions.indexOf(potionName);
//
//     this.potions.splice(index, 1)
//
//     // Change code above this line
//   },
// };
// task40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//
//     const index = this.potions.indexOf(oldName);
//
//     this.potions.splice(index, 1, newName);
//     // Change code above this line
//   },
// };

// task41

const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
        return this.potions;
    },

    addPotion(newPotion) {
        if (this.potions.includes(newPotion)) {
            return `Error! Potion ${newPotion} is already in your inventory!`;
        }

        this.potions.push(newPotion);
    },
    removePotion(potionName) {
        const potionIndex = this.potions.indexOf(potionName);

        if (potionIndex === -1) {
            return `Potion ${potionName} is not in inventory!`;
        }

        this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
        const potionIndex = this.potions.indexOf(oldName);

        if (potionIndex === -1) {
            return `Potion ${oldName} is not in inventory!`;
        }

        this.potions.splice(potionIndex, 1, newName);
    },
    // Change code above this line
};


console.log(atTheOldToad.getPotions());


