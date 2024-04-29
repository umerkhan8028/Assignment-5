
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
Ans:
// Prompt the user to enter their first name
var firstName = prompt("Enter your first name:");

// Prompt the user to enter their last name
var lastName = prompt("Enter your last name:");

// Merge the first and last names to create the full name
var fullName = firstName + " " + lastName;

// Greet the user using their full name
alert("Hello, " + fullName + "! Welcome.");
// Prompt the user to enter their first name
var firstName = prompt("Enter your first name:");

// Prompt the user to enter their last name
var lastName = prompt("Enter your last name:");

// Merge the first and last names to create the full name
var fullName = firstName + " " + lastName;

// Greet the user using their full name
alert("Hello, " + fullName + "! Welcome.");


// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
ans:
// Prompt the user to enter their favorite mobile phone model
var favoriteMobileModel = prompt("Enter your favorite mobile phone model:");

// Calculate the length of the user's input
var inputLength = favoriteMobileModel.length;

// Display the length of the user's input in the browser
console.log(`Length of Your Input: ${inputLength}`);


// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
ans:
// Define the word
var word = "Pakistani";

// Find the index of letter "n" in the word
var indexOfN = word.indexOf("n");

// Display the result
console.log(`Index of 'n' in the word 'Pakistani': ${indexOfN}`);



// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
ans:
// Define the word
var word = "Hello World";

// Find the last index of letter "l" in the word
var lastIndex = word.lastIndexOf("l");

// Display the result in the browser
console.log(`Last index of 'l' in the word 'Hello World': ${lastIndex}`);



// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
ans:
// Define the word
var word = "Pakistani";

// Find the character at the 3rd index in the word
var character = word.charAt(3);

// Display the result in the browser
console.log(`Character at 3rd index in the word 'Pakistani': ${character}`);


// Repeat Q1 using string concat() method.
ans:

// Prompt the user to enter their first name
var firstName = prompt("Enter your first name:");

// Prompt the user to enter their last name
var lastName = prompt("Enter your last name:");

// Concatenate the first and last names to create the full name
var fullName = firstName.concat(" ", lastName);

// Greet the user using their full name
alert("Hello, " + fullName + "! Welcome.");



// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
ans:
// Define the word
var word = "Hyderabad";

// Replace "Hyder" with "Islam" in the word
var replacedWord = word.replace("Hyder", "Islam");

// Display the result in the browser
console.log(`After replacement: ${replacedWord}`);


// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
ans:
// Define the message
var message = "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of "and" with "&" in the message
var replacedMessage = message.split("and").join("&");

// Display the result in the browser
console.log(`After replacement: ${replacedMessage}`);



// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
ans:
// Define the string
var str = "472";

// Convert the string to a number
var num = Number(str);

// Display the original string and its type
console.log(`Original string: ${str} (Type: ${typeof str})`);

// Display the converted number and its type
console.log(`Converted number: ${num} (Type: ${typeof num})`);



// Write a program that takes user input. Convert and
// show the input in capital letters.
ans:
// Prompt the user to enter input
var userInput = prompt("Enter your input:");

// Convert the input to uppercase
var uppercaseInput = userInput.toUpperCase();

// Display the converted input
console.log(`Original Input: ${userInput}`);
console.log(`Input in Uppercase: ${uppercaseInput}`);



// Write a program that takes user input. Convert and
// show the input in title case.
ans:
// Function to convert string to title case
function toTitleCase(input) {
    return input.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Prompt the user to enter input
var userInput = prompt("Enter your input:");

// Convert the input to title case
var titleCaseInput = toTitleCase(userInput);

// Display the converted input
console.log(`Original Input: ${userInput}`);
console.log(`Input in Title Case: ${titleCaseInput}`);



// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
ans:
// Define the variable num
var num = 35.36;

// Convert the number to a string and remove the dot
var strNum = num.toString().replace('.', '');

// Display the result in the browser
console.log(`Original Number: ${num}`);
console.log(`Number as String without Dot: ${strNum}`);




// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
ans:
// Function to check if a character is a special symbol
function isSpecialSymbol(char) {
    const specialSymbols = ['@', '.', ',', '!'];
    return specialSymbols.includes(char);
}

// Prompt the user to enter a username
var username = prompt("Enter your username:");

// Check if the username contains any special symbols
for (var i = 0; i < username.length; i++) {
    if (isSpecialSymbol(username[i])) {
        alert("Please enter a valid username without special symbols [@ . , !]");
        break;
    }
}

// Display the username
console.log("Username:", username);



// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
ans:
// Define the array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user to enter an item to search
var userInput = prompt("Enter an item to search:").toLowerCase();

// Perform case-insensitive search
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput) {
        found = true;
        break;
    }
}

// Inform the user about the availability of the item
if (found) {
    alert("Yes, '" + userInput + "' is found in the list.");
} else {
    alert("No, '" + userInput + "' is not found in the list.");
}


// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
ans:
// Function to check if a character is an alphabet
function isAlphabet(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

// Function to check if a character is a digit
function isDigit(char) {
    return char >= '0' && char <= '9';
}

// Prompt the user to enter a password
var password = prompt("Enter your password:");

// Check if the password meets the requirements
var isValid = true;
if (password.length < 6) {
    isValid = false;
} else if (isDigit(password[0])) {
    isValid = false;
} else {
    var hasAlphabet = false;
    var hasDigit = false;
    for (var i = 0; i < password.length; i++) {
        if (isAlphabet(password[i])) {
            hasAlphabet = true;
        } else if (isDigit(password[i])) {
            hasDigit = true;
        }
    }
    if (!hasAlphabet || !hasDigit) {
        isValid = false;
    }
}

// Prompt the user to enter a valid password if the password is not valid
if (!isValid) {
    alert("Please enter a valid password that meets the requirements:\n\
- It should contain alphabets and numbers\n\
- It should not start with a number\n\
- It must be at least 6 characters long");
} else {
    alert("Password is valid.");
}


// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
ans:
// Define the string
var university = "University of Karachi";

// Convert the string to an array using split method
var universityArray = university.split(' ');

// Display the elements of the array in the browser
console.log("Array Elements:");
for (var i = 0; i < universityArray.length; i++) {
    console.log(universityArray[i]);
}


// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
ans:
// Define the string
var sentence = "The quick brown fox jumps over the lazy dog";

// Convert the string to lowercase to perform case-insensitive search
sentence = sentence.toLowerCase();

// Define the word to search for
var wordToSearch = "the";

// Split the sentence into an array of words
var wordsArray = sentence.split(' ');

// Count the occurrences of the word
var count = 0;
for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === wordToSearch) {
        count++;
    }
}

// Display the count
console.log("Number of occurrences of the word 'the':", count);



