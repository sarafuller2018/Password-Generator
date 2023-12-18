// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var generatePassword = function () {
  // Collects and stores user input for length
  var userChoiceLength = window.prompt("What is the length for your new password? Type a whole number between 8 and 128.");

  // Validates that the user input meets minimum and maximum length requirements for password
  if (userChoiceLength < 8) {
    alert("Please enter a number between 8 and 128.")
    return " "
  }

  if (userChoiceLength > 128) {
    alert("Please enter a number between 8 and 128.")
    return " "
  }

  // Collects and stores user input
  var userChoiceLowercase = window.confirm("Would you like to include a lowercase letter(s)?");
  var userChoiceUppercase = window.confirm("Would you like to include a uppercase letter(s)?");
  var userChoiceNumbers = window.confirm("Would you like to include a number(s)?");
  var userChoiceChar = window.confirm("Would you like to include a special character(s)?");

  // Validates that the user input meets minimum character type requirements for password
  if (userChoiceLowercase === false && userChoiceUppercase === false && userChoiceNumbers === false && userChoiceChar === false) {
    alert("You must choose at least one character type!");
    return " "
  }

  // This object stores the user input for easy access in the console
  var characterPool = {
    Lowercase: userChoiceLowercase,
    Uppercase: userChoiceUppercase,
    Numbers: userChoiceNumbers,
    SpecCharacters: userChoiceChar,
    Length: userChoiceLength
  }
  console.log(characterPool);

  // Creates array of optional characters to use in randomizer function
  var characterOptions = [];

  if (userChoiceLowercase) {
    const lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (var i = 0; i < lowercaseAlphabet.length; i++) {
      characterOptions.push(lowercaseAlphabet[i]);
    }
    console.log(characterOptions);
  }

  if (userChoiceUppercase) {
    const uppercaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for (var i = 0; i < uppercaseAlphabet.length; i++) {
      characterOptions.push(uppercaseAlphabet[i]);
    }
    console.log(characterOptions);
  }

  if (userChoiceNumbers) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (var i = 0; i < numbers.length; i++) {
      characterOptions.push(numbers[i]);
    }
    console.log(characterOptions);
  }

  if (userChoiceChar) {
    const specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', ']', ';', '.', '?', '/', ':']
    for (var i = 0; i < specialCharacter.length; i++) {
      characterOptions.push(specialCharacter[i]);
    }
    console.log(characterOptions);
  }

  // Sets password equal to random characters selected from the characterOptions array
  var finalPassword = "";
  for (var i = 0; i < characterPool.Length; i++) {
    const passwordRandomizer = Math.floor(Math.random() * characterOptions.length);
    finalPassword += characterOptions[passwordRandomizer];

    console.log(finalPassword)
  }

  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);