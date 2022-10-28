// Assignment 1: Check and study string methods, learn how to convert string to an array

// JavaScript string is a zero or more characters written inside quotes E.g:
let name = "ElizabethOgunmola";

// That is an example of a string, they are used for storing and manipulating texts, you can use a single or double quote. 
// To find the length of a string, you can use the built-in length property.

let length = name.lemgth;

console.log(length)

// CONVERTING A STRING TO AN ARRAY IN JAVASCRIPT

// Using .split('')

const myPetFriend = "Dolphin";
const myPetFriendArray = myPetFriend.split('');
console.log(myPetFriendArray)


// Assignment 2

// 1. Write a program that prints all even numbers from 0 -20

for (i=0; i<=20; i++){
    // let's divide the value by 2
    // if the remainder is zero, then it is an even number

    if(i % 2 == 0){
        console.log(i)
    }

}


// 2. Write a program that calculates the sum of numbers within an array

// initialize array
const arr = [5, 15, 45];

let sum = 0;
for (const value of arr) {
    sum += value;
}

console.log(sum)



// 3. Write a function that reverses an array
// we use thr reverse() function

const friends = ["Tola", "Tade", "Lizzy", "Tayo"];

friends.reverse();


// 4. Write a function that return the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);


// 5. Write a program that prints the multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 12; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}

// 6. Write a program to remove duplicate value from an array
// program to remove duplicate value from an array

function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);

// 7. Write a program that calculates the average of numbers in an array.

const num = [1, 2, 3, 4, 5];
const average = num.reduce((a, b) => a + b, 0) / num.length;
console.log(average);

// 8. Given any two arrays, write a program that joins the two arrays together 

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);