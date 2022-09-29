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






// var generateBin = document.querySelector("#generate")

// function generatePassword() {
// // Data
// // we need different sets of characters\
// //numbers
// //lowercase characters
// //uppercase characters
// //special characters
// //whether they choose one of each

// //how many character they want to use/ some number
// //numbers yes or no
// //uppercase yes or no
// //lowercase yes or no


// //put the selected characters together
// //randomly selectcharacters from the selected characters
// // put them together

// return "password"
// }







// // numberbucket