// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  var numOfChar = prompt ("how many Characters?")
    // if number of char is less than 8, prompt this

    // if number of char is more than 128, prompt this


  return "This is the Password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
