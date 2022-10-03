// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Data
// we need different sets of characters\
// numbers
// lowercase characters
// uppercase characters
// special characters
//whether they choose one of each
var lettersLowerCase = "abcdefghijklmnopqrstuvwxyz";
var lettersUpperCase = "lettersLowerCase".toUpperCase();
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*";

// var generateBin = document.querySelector("#generate")

function generatePassword() {
//how many character they want to use/ some number
  var passwordLength = function enterPasswordLength() {
    return prompt("Choose a number of characters between 8 and 128.");
    
    if (passwordLength < 8 || passwordLength > 128) {
    return alert("too little or too many specialCharacters")
  }
}
console.log(passwordLength())

//numbers yes or no
//uppercase yes or no
//lowercase yes or no


//put the selected characters together
//randomly selectcharacters from the selected characters
// put them together

return "password"
}
