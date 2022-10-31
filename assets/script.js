var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function enterPasswordLength() {
  var length = parseInt(prompt("Please enter a number of characters between 8 & 128"));
  if ((length < 8 || length > 128) || isNaN(length)){
    alert("Choose a NUMBER between 8 & 128!")
    return enterPasswordLength();
  } else {
    return length;
  }
}

function generatePassword() { 
  var lettersLowerCase = "abcdefghijklmnopqrstuvwxyz";
  var lettersUpperCase = lettersLowerCase.toUpperCase();
  var numbers = "1234567890";
  var specialCharacters = "!@#$%^&*";
  var passwordLength = 0;
  var chosenCharacters = "";
  var password = "";
  passwordLength = enterPasswordLength()

  var addNumbers = confirm("Would you like to use number?");
  if (addNumbers) chosenCharacters += numbers;
  var addUpperCaseLetters = confirm("Would you like to add uppercase Letters?");
  if (addUpperCaseLetters) chosenCharacters += lettersUpperCase;
  var addLowerCaseLetters = confirm("Would you like to add lowercase Letters?");
  if (addLowerCaseLetters) chosenCharacters += lettersLowerCase;
  var addSpecialCharacters = confirm("Would you like to add special characters?");
  if (addSpecialCharacters) chosenCharacters += specialCharacters;

  for(var i=0; i<passwordLength; i++) {
    var randomLength = Math.floor(Math.random() * chosenCharacters.length);
    var randomCharacters = chosenCharacters[randomLength];
    password += randomCharacters;
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}