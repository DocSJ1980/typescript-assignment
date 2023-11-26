# Assignment 1: Typescript Practice

This is a practice repository for the tasks assigned in the following https://wania-kazmi.notion.site/Assignment-1-396275591fe946bd897d52b8174df795

To check this repo follow the following steps in your terminal

### Step 1: Clone Repo

```bash
git clone https://github.com/DocSJ1980/typescript-assignment.git
```

### Step 2: Go into folder
```bash
cd typescript-assignment
```

### Step 3: Install required packages
```bash
npm install
```

### Step 4: Transpile the ts files
```bash
tsc
```

### Step 5: Run the file and check the outputs
```bash
node index
```


**You will approximately (based on your inputs) get the following output:**

``` 
---
Task 1 Started
Welcome to the SJ's supermarket!
Current items available in Fruits Bay:  0 items []
Just received a supply from the Fruit market.
Adding items to Fruits Bay...
Current items available in Fruits Bay:  3 items [ 'Apple', 'Banana', 'Orange' ]
Just received a supply from the Vegetable market.
Adding items to Vegetables Bay...
Current items available in Vegetables Bay:  3 items [ 'Carrot', 'Corn', 'Cucumber' ]
Just received a supply from the Grocery market.
Adding items to Groceries Bay...
Current items available in Groceries Bay:  3 items [ 'Rice', 'Flour', 'Sugar' ]
Assigning prices...
Current prices:  {
  Apple: 250,
  Banana: 150,
  Orange: 300,
  Carrot: 80,
  Corn: 100,
  Cucumber: 60,
  Rice: 450,
  Flour: 550,
  Sugar: 130
}
? What's would you like to buy today? Fruits
? Which item would you like to buy? Banana
? How many would you like to buy? 2
? How would you like to pay? Card
You chose to buy Banana and pay with Card
You bought Banana for 300
No discount available
Thanks for payment of your total bill of 300. You chose to pay with Card.
Task 1 Completed

---

Task 2 Started
Task 2 Scenario 1: The sum of 5 and 3: 8
Task 2 Scenario 2: Checking if 4824 is Even or Odd: Even
Task 2 Scenario 2: Checking if 7835 is Even or Odd: Odd
Task 2 Scenario 3: The area of a rectangle with width: 5 and height: 3 is: 15
Task 2 Scenario 4: The reverse of 'Hello': olleH
Task 2 Scenario 5: 37 degrees Celsius in Fahrenheit is: 98.6
Task 2 Completed

---

Task 3 Started
Task 3 Scenario 1: Pushing 6 to the array: 1,2,3,4,5,6
Task 3 Scenario 1: Popping the last element from the array: 1,2,3,4,5
Task 3 Scenario 1: Shifting the first element from the array: 2,3,4,5
Task 3 Scenario 1: Unshifting the first element from the array: 1,2,3,4,5
Task 3 Scenario 2: Creating a subarray from arr2, with 2 elements removed from index 1 using arr2.splice(1, 2)
Original Array before splicing : 1,2,3,4,5
Spliced Array: 2,3
Original Array after splicing: 1,4,5
Task 3 Scenario 2: Creating a subarray from arr3, without modifying the original array using arr3.slice(1, 3)
Original Array before slicing : 1,2,3,4,5
SlicedArray: 2,3
Original Array after slicing: 1,2,3,4,5
Task 3 Completed

---

Thank you for your time
```