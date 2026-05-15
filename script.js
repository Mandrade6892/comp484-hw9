// ==========================
// Part 1: Date Display
// ==========================

// creates a new Date object using the current date and time
let currentDate = new Date();

// grabbing the month, day, and year separately
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let year = currentDate.getFullYear();

// adding leading zeros so dates like 5 become 05
let formattedMonth = month.toString().padStart(2, "0");
let formattedDay = day.toString().padStart(2, "0");

// combining everything into one clean message
let dateMessage = "Today is " + formattedMonth + "/" + formattedDay + "/" + year;

// displays the final date message on the webpage
document.getElementById("dateOutput").textContent = dateMessage;


// ==========================
// Part 2: Number Conversion
// ==========================

// different values to test number conversion
let firstValue = "42";
let secondValue = "19.75";
let thirdValue = "hello";
let fourthValue = "100";

// converting each value into a number using Number()
let firstConverted = Number(firstValue);
let secondConverted = Number(secondValue);
let thirdConverted = Number(thirdValue);
let fourthConverted = Number(fourthValue);

// creating result messages for each conversion test
let firstMessage = "Original value: '" + firstValue + "' → Converted: " + firstConverted +
    " → isNaN: " + Number.isNaN(firstConverted) +
    " → isInteger: " + Number.isInteger(firstConverted);

let secondMessage = "Original value: '" + secondValue + "' → Converted: " + secondConverted +
    " → isNaN: " + Number.isNaN(secondConverted) +
    " → isInteger: " + Number.isInteger(secondConverted);

let thirdMessage = "Original value: '" + thirdValue + "' → Converted: " + thirdConverted +
    " → isNaN: " + Number.isNaN(thirdConverted) +
    " → isInteger: " + Number.isInteger(thirdConverted);

let fourthMessage = "Original value: '" + fourthValue + "' → Converted: " + fourthConverted +
    " → isNaN: " + Number.isNaN(fourthConverted) +
    " → isInteger: " + Number.isInteger(fourthConverted);

// checking if the converted value became NaN
let validationMessage = "";

if (Number.isNaN(thirdConverted)) {
    validationMessage = "The value 'hello' is not a valid number.";
} else {
    validationMessage = "The value 'hello' is a valid number.";
}

// checking if the converted value is an integer
let integerMessage = "";

if (Number.isInteger(firstConverted)) {
    integerMessage = "The value '42' is an integer.";
} else {
    integerMessage = "The value '42' is not an integer.";
}

// displaying all conversion results on the page
document.getElementById("numberConversionOutput").innerHTML =
    "<p>" + firstMessage + "</p>" +
    "<p>" + secondMessage + "</p>" +
    "<p>" + thirdMessage + "</p>" +
    "<p>" + fourthMessage + "</p>" +
    "<p>" + validationMessage + "</p>" +
    "<p>" + integerMessage + "</p>";


// ==========================
// Part 3: Math & Formatting
// ==========================

// values for a simple shopping cost calculator
let itemPrice = 24.99;
let taxRate = 0.095;
let shippingCost = 5.50;

// doing some math calculations
let subtotal = itemPrice + shippingCost;
let taxAmount = itemPrice * taxRate;
let totalCost = subtotal + taxAmount;

// using parseFloat and parseInt for number formatting examples
let roundedItemPrice = Number.parseFloat(itemPrice);
let itemCount = Number.parseInt("3 items");

// checking if the total cost is over 30 dollars
let totalMessage = "";

if (totalCost >= 30) {
    totalMessage = "The total cost is $30 or more.";
} else {
    totalMessage = "The total cost is less than $30.";
}

// displaying all math and formatting results on the webpage
document.getElementById("mathOutput").innerHTML =
    "<p>Item price: $" + roundedItemPrice.toFixed(2) + "</p>" +
    "<p>Shipping cost: $" + shippingCost.toFixed(2) + "</p>" +
    "<p>Subtotal: $" + subtotal.toFixed(2) + "</p>" +
    "<p>Tax amount: $" + taxAmount.toFixed(2) + "</p>" +
    "<p>Total cost: $" + totalCost.toFixed(2) + "</p>" +
    "<p>Number parsed from '3 items': " + itemCount + "</p>" +
    "<p>" + totalMessage + "</p>";