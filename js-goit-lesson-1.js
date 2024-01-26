function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
    // Change code above this line
    console.log("")
    return `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
}

// console.log(makeOrderMessage(2, 100, 50))

// task 18
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line

    const totalPrice = pricePerDroid * orderedQuantity;

    if (totalPrice > customerCredits) {
        message = "Insufficient funds!";
    } else {
        message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
    }

    // Change code above this line
    return message;
}

// makeTransaction();

//task 23

function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Change code below this line

    if (totalSpent < 5000) {
        discount = BASE_DISCOUNT;
    } else if (totalSpent >= 5000 && totalSpent < 20000) {
        discount = BRONZE_DISCOUNT;
    } else if (totalSpent >= 20000 && totalSpent < 50000) {
        discount = SILVER_DISCOUNT;
    } else {
        discount = GOLD_DISCOUNT;
    }

    // Change code above this line
    return discount;
}

// getDiscount();

// task 27
function getSubscriptionPrice(type) {
    let price;
    // Change code below this line

    switch (type) { // Change this line
        case "starter": // Change this line

            price = 0; // Change this line
            break;

        case "professional":// Change this line
            price = 20; // Change this line
            break;

        case "organization": // Change this line
            price = 50; // Change this line
            console.log(price)
            break;
    }

    // Change code above this line
    return price;
}

console.log(getSubscriptionPrice("professional"));

// task 28
function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line

    if (password === null) {
        message = "Canceled by user!";
    } else if (password === ADMIN_PASSWORD) {
        message = "Welcome!";
    } else {
        message = "Access denied, wrong password!";
    }

    switch (password) {
        case null:
            message = "Canceled by user!";
            break;
        case ADMIN_PASSWORD:
            message = "Welcome!";
            break;

        default:
            message = "Access denied, wrong password!";
    }

    // Change code above this line
    return message;
}

// checkPassword("jqueryismyjam")

// task 29
function getShippingCost(country) {
    let message;
    // Change code below this line
    switch (country) {
        case 'China':
            message = `Shipping to ${country} will cost 100 credits`;
            break;

        case 'Chile':
            message =`Shipping to ${country} will cost 250 credits`;
            break;

        case 'Australia':
            message = `Shipping to ${country} will cost 170 credits`;
            break;

        case "Jamaica":
            message = `Shipping to ${country} will cost 120 credits`;
            break;
        default:
            message = `Sorry, there is no delivery to your country`;
    }


    // Change code above this line
    return message;
}

// task 32

function getSubstring(string, length) {
    const substring = string.slice(string, length); // Change this line

    return substring;
}

// console.log(getSubstring("Hello world", 3));

// task 33

function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
    result = (message.length <= maxLength) ? message : message.slice(0, maxLength) + "..."
    /// Change code above this line
    return result;
}

// console.log(formatMessage('Curabitur ligula sapien', 16))
// console.log(formatMessage('Curabitur ligula sapien', 22))

// task 36

function checkForSpam(message) {
    let result;
    // Change code below this line
    message = message.toLowerCase();
    result = (message.includes("sale") || message.includes("spam"));
    // Change code above this line
    return result;
}

// console.log(checkForSpam('Get best sale offers now!'))

// task13 split + join
function slugify(title) {
    // Change code below this line

    const url = title.split(' ').join('-');

    return url.toLowerCase();
    // Change code above this line
}