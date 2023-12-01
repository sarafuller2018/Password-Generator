// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function userInput() {
    var userChoiceLowercase = window.confirm("Would you like to include a lowercase letter(s)?");
    var userChoiceUppercase = window.confirm("Would you like to include a uppercase letter(s)?");
    var userChoiceNumbers = window.confirm("Would you like to include a number(s)?");
    var MinLengthQuestion = window.prompt("What is the minimum length for your new password? Type a whole number greater than or equal to 8.");
    var MaxLengthQuestion = window.prompt("What is the maximum length for your new password? Type a whole number less than or equal to 128.");
  }

  userInput();

  var generatePassword = function() {
    //start creating function to generate password
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
