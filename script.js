// Assignment Code
var generateBtn = document.querySelector("#generate");

// Get password criteria from user:
// Length: 8-128 characters
//
// Options for types of characters to include:
// lowercase, uppercase, numeric, and/or special characters

function generateRandomNumber (min, max) {
  //This function generates a random number between (inclusive) min and max
  return Math.floor(Math.random() * (max - min) + min);
}

function validateInputs() {

  if (document.getElementById("Low").checked == false &&
    document.getElementById("Up").checked == false &&
    document.getElementById("Num").checked == false &&
    document.getElementById("Spec").checked == false)
  {
    return false;
  }

  var inputLength = parseInt(document.getElementById("PassWordLength").value);

  if (!Number.isInteger(inputLength)){
    return false;
  }
  if (inputLength < 8 || inputLength > 128){
    return false;
  }
  else {
    return true;
  }
}

function generatePassword() {
  // Generate a password of length and character sets from page
  var inputLength = parseInt(document.getElementById("PassWordLength").value);

  const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "@#$%&*";

  // Generate a string of characters to generate a password from
  // based on the user inputs
  var charOptions = "";

  if (document.getElementById("Low").checked == true){
    charOptions = charOptions + alphabetLower;
  }
  if (document.getElementById("Up").checked == true){
    charOptions = charOptions + alphabetUpper;
  }
  if (document.getElementById("Num").checked == true){
    charOptions = charOptions + numbers;
  }
  if (document.getElementById("Spec").checked == true){
    charOptions = charOptions + specialChars;
  }

  // initialize an empty string that will become the password
  // iterate and generate the password based on 
  var passWord = "";
  for (i = 0; i < inputLength; i++){
    passWord = passWord + charOptions[generateRandomNumber(1, charOptions.length)];
  }
  return passWord;
}

// Write password to the #password input
function writePassword() {

  // Call function to validate inputs before proceding 
  var inputStatus = validateInputs();
  // If inputs are not valid, reset forms and return out of the function before generating a password ;)
  if (inputStatus == false){
    alert("Password length must be an integer between 8 and 128 characters, and you must choose a complexity.");
    document.getElementById("Low").checked = false;
    document.getElementById("Up").checked = false;
    document.getElementById("Num").checked = false;
    document.getElementById("Spec").checked = false;
    document.getElementById("PWLength").reset();
    //generatePassword.addEventListener("click", writePassword);
    return;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
