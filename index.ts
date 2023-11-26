// Assignment 1:

// Task 1:

// Task Description:

// 1. Scenario:
// You are tasked to simulate a simple shopping experience using conditional statements and loops at a supermarket.
// 2. Requirements:
//     Create a TypeScript program that simulates a shopping scenario with multiple conditions.
//     Utilize if-else, if-else if-else statements for decision making based on different scenarios encountered while shopping.
//     Incorporate nested loops to simulate actions within various sections of the supermarket.
console.log("------------------------------------------------------------------------------------------------")
console.log('Task 1 Started')
console.log("Welcome to the SJ's supermarket!");
let fruits: string[] = [];
console.log("Current items available in Fruits Bay: ", fruits.length, "items", fruits.map(x => x));
console.log("Just received a supply from the Fruit market.")
console.log("Adding items to Fruits Bay...");
fruits.push('Apple');
fruits.push('Banana');
fruits.push('Orange');
console.log("Current items available in Fruits Bay: ", fruits.length, "items", fruits.map(x => x));

let vegetables: string[] = [];
console.log("Just received a supply from the Vegetable market.")
console.log("Adding items to Vegetables Bay...");
vegetables.push('Carrot');
vegetables.push('Corn');
vegetables.push('Cucumber');
console.log("Current items available in Vegetables Bay: ", vegetables.length, "items", vegetables.map(x => x));

let groceries: string[] = [];
console.log("Just received a supply from the Grocery market.")
console.log("Adding items to Groceries Bay...");
groceries.push('Rice');
groceries.push('Flour');
groceries.push('Sugar');
console.log("Current items available in Groceries Bay: ", groceries.length, "items", groceries.map(x => x));
console.log("Assigning prices...");
let prices: { [key: string]: number } = {
    'Apple': 250,
    'Banana': 150,
    'Orange': 300,
    'Carrot': 80,
    'Corn': 100,
    'Cucumber': 60,
    'Rice': 450,
    'Flour': 550,
    'Sugar': 130
};
console.log("Current prices: ", prices);


// 3. Functionalities to Include:
//     Scenario 1 Buying Groceries:
//         Simulate buying fruits, vegetables, and groceries.
//         Apply if-else statements to check specific conditions:
//             Check if the customer wants fruits or vegetables.
//             Based on the choice, suggest different items available and their prices.
//             Display the total bill.

// Function Declaration 
function buyGroceries(item: string, quantity: number) {
    if (fruits.includes(item)) {
        console.log(`You bought ${item} for ${prices[item] * quantity}`);
    } else if (vegetables.includes(item)) {
        console.log(`You bought ${item} for ${prices[item] * quantity}`);
    } else if (groceries.includes(item)) {
        console.log(`You bought ${item} for ${prices[item] * quantity}`);
    } else {
        console.log('Item not available');
    }
}
//     Scenario 2 Checking Discounts:
//         Introduce a discount scenario based on the total bill amount.
//         Use if-else if-else statements to apply discounts:
//             If the bill amount is above a certain value, apply a discount.
//             Display the discounted total.

function checkDiscount(bill: number) {
    if (bill > 500) {
        console.log(`You got a 10% discount. Your new total is ${bill * 0.9}`);
        return bill * 0.9
    } else if (bill > 300) {
        console.log(`You got a 5% discount. Your new total is ${bill * 0.95}`);
        return bill * 0.95
    } else {
        console.log('No discount available');
        return bill
    }
}

//     Scenario 3 Checkout Process:
//         Simulate the checkout process.
//         Use nested loops to ask for payment methods:
//             First, ask the user for the preferred payment method (nested loop for payment options).
//             Display a confirmation message based on the payment method chosen.
function checkout(method: string) {
    let paymentMethods = ['Cash', 'Card', 'Online Banking'];
    for (let i = 0; i < paymentMethods.length; i++) {
        if (paymentMethods[i] === method) {
            console.log(`Thanks for payment of your total bill of ${totalBill}. You chose to pay with ${paymentMethods[i]}.`);
            // Here you would take user input and assign it to chosenMethod
        }
    }
}
// Taking inputs from user
import inquirer from 'inquirer';

let answers = await inquirer.prompt([
    {
        type: 'list',
        name: 'itemList',
        message: "What's would you like to buy today?",
        choices: ['Fruits', 'Vegetables', 'Groceries'],
    },
    {
        type: 'list',
        name: 'item',
        message: 'Which item would you like to buy?',
        choices: (answers) => {
            if (answers.itemList === 'Fruits') {
                return fruits;
            } else if (answers.itemList === 'Vegetables') {
                return vegetables;
            } else if (answers.itemList === 'Groceries') {
                return groceries;
            }
        },
    },
    {
        name: "quantity",
        type: "number",
        message: "How many would you like to buy?",
        default: 1
    },
    {
        name: "method",
        type: "list",
        message: "How would you like to pay?",
        choices: ["Cash", "Card", "Online Banking"],
    }
]);

let item = answers.item;
let method = answers.method;
let quantity = answers.quantity;
const bill = prices[item] * quantity;

console.log(`You chose to buy ${item} and pay with ${method}`);

buyGroceries(item, quantity);
const totalBill = checkDiscount(bill);
checkout(method);
console.log('Task 1 Completed')
console.log("------------------------------------------------------------------------------------------------")

// Task 2:
console.log('Task 2 Started')
// Scenario 1: Sum numbers
//     Write a function named `add` that takes two numbers as arguments and returns their sum.
function add(num1: number, num2: number): number {
    return num1 + num2;
}
console.log("Task 2 Scenario 1: The sum of 5 and 3: " + add(5, 3))
// Scenario 2: Check Even or Odd
//     Develop a function `checkEvenOrOdd` that checks if a given number is even or odd.
//     The function should take an integer as a parameter and return a string indicating whether the number is even or odd.
function checkEvenOrOdd(num: number): string {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let num1 = 4824
let num2 = 7835
console.log(`Task 2 Scenario 2: Checking if ${num1} is Even or Odd: ` + checkEvenOrOdd(4824))
console.log(`Task 2 Scenario 2: Checking if ${num2} is Even or Odd: ` + checkEvenOrOdd(3))

// Scenario 3: Calculate Area:
//     Create a function `calculateArea` that calculates the area of a rectangle.
//     The function should take width and height as parameters and return the calculated area.
function calculateArea(width: number, height: number): number {
    return width * height;
}
let width = 5
let height = 3
console.log(`Task 2 Scenario 3: The area of a rectangle with width: ${width} and height: ${height} is: ` + calculateArea(width, height))


// Scenario 4: String Reversal
//     Implement a function `reverseString` that reverses a given string.
//     The function should take a string as a parameter and return the reversed string.
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}
console.log("Task 2 Scenario 4: The reverse of 'Hello': " + reverseString("Hello"));

// Scenario 5: Temperature Conversion:
//     Create a function `convertCelsiusToFahrenheit` that converts temperature from Celsius to Fahrenheit.
//     The function should take a temperature value in Celsius as a parameter and return the equivalent temperature in Fahrenheit.
function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}
let tempCelcius = 37
console.log(`Task 2 Scenario 5: ${tempCelcius} degrees Celsius in Fahrenheit is: ` + convertCelsiusToFahrenheit(tempCelcius))
console.log('Task 2 Completed')
console.log("------------------------------------------------------------------------------------------------")

// Task 3:
console.log('Task 3 Started')
// Scenario 1 Modify Array with Methods:
//     Initialize an array with some initial elements.
let arr: number[] = [1, 2, 3, 4, 5];

//         `push`: Add new elements to the end of the array.
arr.push(6);
console.log(`Task 3 Scenario 1: Pushing 6 to the array: ${arr}`);
//         `pop`: Remove the last element from the array.
arr.pop();
console.log(`Task 3 Scenario 1: Popping the last element from the array: ${arr}`);
//         `shift`: Remove the first element from the array.
arr.shift();
console.log(`Task 3 Scenario 1: Shifting the first element from the array: ${arr}`);
//         `unshift`: Add new elements to the beginning of the array.
arr.unshift(1);
console.log(`Task 3 Scenario 1: Unshifting the first element from the array: ${arr}`);

// Scenario 2 Subarray Creation:
//     Implement the use of `splice` and `slice` to create subarrays from the original array:
let arr2: number[] = [1, 2, 3, 4, 5];
console.log(`Task 3 Scenario 2: Creating a subarray from arr2, with 2 elements removed from index 1 using arr2.splice(1, 2)`);
console.log(`Original Array before splicing : ${arr2}`);
//         `splice`: Create a subarray by removing elements from the original array.
let splicedArr: number[] = arr2.splice(1, 2);
console.log(`Spliced Array: ${splicedArr}`);
console.log(`Original Array after splicing: ${arr2}`);

//         `slice`: Create a subarray without modifying the original array.
let arr3: number[] = [1, 2, 3, 4, 5];
console.log(`Task 3 Scenario 2: Creating a subarray from arr3, without modifying the original array using arr3.slice(1, 3)`);
console.log(`Original Array before slicing : ${arr3}`);
let slicedArr: number[] = arr3.slice(1, 3);
console.log(`SlicedArray: ${slicedArr}`);
console.log(`Original Array after slicing: ${arr3}`);

console.log('Task 3 Completed')
console.log("------------------------------------------------------------------------------------------------")
console.log("Thank you for your time")
