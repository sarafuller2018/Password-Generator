// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var generatePassword = function () {
  var userChoiceLowercase = window.confirm("Would you like to include a lowercase letter(s)?");
  var userChoiceUppercase = window.confirm("Would you like to include a uppercase letter(s)?");
  var userChoiceNumbers = window.confirm("Would you like to include a number(s)?");
  var userChoiceChar = window.confirm("Would you like to include a special character(s)?");
  var MinLengthQuestion = window.prompt("What is the minimum length for your new password? Type a whole number greater than or equal to 8.");
  var MaxLengthQuestion = window.prompt("What is the maximum length for your new password? Type a whole number less than or equal to 128.");

  if (userChoiceLowercase === false && userChoiceUppercase === false && userChoiceNumbers === false && userChoiceChar === false) {
    alert("You must choose at least one character type!")
  }

  if (MinLengthQuestion < 8) {
    alert("Please enter a number greater than or equal to 8.")
  }

  if (MaxLengthQuestion > 128) {
    alert("Please enter a number less than or equal to 128.")
  }

  var characterPool = {
    Lowercase: userChoiceLowercase,
    Uppercase: userChoiceUppercase,
    Numbers: userChoiceNumbers,
    SpecCharacters: userChoiceChar,
    Min: MinLengthQuestion,
    Max: MaxLengthQuestion
  }
  console.log(characterPool);
 
// this is where i am lost
// some type of array??? 
// ??? var randomPasswordCharacters = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890", "!@#$%^&*()_+[]{}/><;:"];

  for (var i = 0; i < characterPool.Max; i++) {
    if (userChoiceLowercase) {
      const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
      const randomLowercaseLetter = Math.floor(Math.random() * lowercaseAlphabet.length);
      var storeLower = lowercaseAlphabet[randomLowercaseLetter];
      console.log(storeLower);
    }
  
    if (userChoiceUppercase) {
      const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const randomUppercaseLetter = Math.floor(Math.random() * uppercaseAlphabet.length);
      var storeUpper = uppercaseAlphabet[randomUppercaseLetter]
      console.log(storeUpper);
    }
  
    if (userChoiceNumbers) {
      const numbers = '1234567890';
      const randomNumbers = Math.floor(Math.random() * numbers.length);
      var storeNumbers = numbers[randomNumbers];
      console.log(storeNumbers);
    }
  
    if (userChoiceChar) {
      const specialCharacter = '!@#$%^&*()_+[]{}/><;:';
      const randomSpecialCharacter = Math.floor(Math.random() * specialCharacter.length);
      var storeChar = specialCharacter[randomSpecialCharacter]
      console.log(storeChar);
  }
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);