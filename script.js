// Assignment Code
var generateBtn = document.querySelector("#generate");

// Get password criteria from user:
// Length: 8-128 characters
//
// Options for types of characters to include:
// lowercase, uppercase, numeric, and/or special characters
// Validate user input -> loop if no options selected

// Generate string of characters to inlcude in the password based on user input
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = alphabetLower.toUpperCase();
const numbers = "0123456789";
const specialChars = "@#$%&*";
var passWordLength = 8;
var charOptions = alphabetLower+alphabetUpper+numbers+specialChars;


function generateRandomNumber (min, max){
  //This function generates a random number between min and max (inclusive)
  return Math.floor(Math.random() * (max - min) + min);
}

function generatePassword(aList, aSize){
  // Generate a password of length aSize from the characters in aList
  var passWord = ""; // initialize an empty string to be used in the following loop
  for (i = 0; i < aSize; i++){
    passWord = passWord + aList[generateRandomNumber(0, aList.length)];
    // debugging - delete later
    console.log(passWord);
  }
  return passWord;
}



// Write password to the #password input
function writePassword() {

  // call some other function to display dropdowns, etc and get input


  var password = generatePassword(charOptions, passWordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //debugging stuff
  console.log("justin the function was called when the button was pushed");
  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
