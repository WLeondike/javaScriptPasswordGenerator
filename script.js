// Assignment Code
var generateBtn = document.querySelector("#generate");

//declarations
var lowerUpper = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var special = "!#$%&()*+-/:;<=>?@[]^_`{|}~"
var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arraySpecial = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var stylePassword = [];
var password = "";
var finalPassword = "";

function generatePassword() {

  var numOfChar = prompt("how many Characters would you like?")

  if (numOfChar > 7 && numOfChar < 127) {
    //Script runs through confirms to declare types of characters requred for your password
    var confirmUpper = confirm("Would you like uppercase characters?");
    var confirmLower = confirm("Would you like lowercase characters?");
    var confirmSpecial = confirm("Would you like special characters");
    var confirmNum = confirm("Would you like numbers?");

    if (confirmUpper) {
      password += stylePassword.concat(arrayUpper);
    }

    if (confirmLower) {
      password += stylePassword.concat(arrayLower);
    }

    if (confirmNum) {
      password += stylePassword.concat(arrayNum);
    }

    if (confirmSpecial) {
      password += stylePassword.concat(arraySpecial);
    }

    password = password.replace(/,/g, "")

    for (let index = 0; index < numOfChar; index++) {
      finalPassword += password.charAt(Math.floor(Math.random() * password.length));
    }

    return finalPassword
    
    //when less than 8 characters or greather than 128 characters are entered, alert else statment. 
   } else 
    alert("Please choose between 8 and 128 characters");
   

    
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);