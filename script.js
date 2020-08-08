// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generateRandomNumber (min, max){w
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
