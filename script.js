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


var generatePassword = function () {
  var userChoiceLowercase = window.confirm("Would you like to include a lowercase letter(s)?");

  if (userChoiceLowercase) {
    const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomLowercaseLetter = Math.floor(Math.random() * lowercaseAlphabet.length);
    var storeLower = lowercaseAlphabet[randomLowercaseLetter];
    console.log(storeLower);
  } else {
    return // need to find out what to put here
  }

  var userChoiceUppercase = window.confirm("Would you like to include a uppercase letter(s)?");

  if (userChoiceUppercase) {
    const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomUppercaseLetter = Math.floor(Math.random() * uppercaseAlphabet.length);
    var storeUpper = uppercaseAlphabet[randomUppercaseLetter]
    console.log(storeUpper);
  } else {
    return // need to find out what to put here
  }

  var userChoiceNumbers = window.confirm("Would you like to include a number(s)?");

  if (userChoiceNumbers) {
    const numbers = '1234567890';
    const randomNumbers = Math.floor(Math.random() * numbers.length);
    var storeNumbers = numbers[randomNumbers];
    console.log(storeNumbers);
  } else {
    return // need to find out what to put here
  }

  var userChoiceChar = window.confirm("Would you like to include a special character(s)?");

  if (userChoiceChar) {
    const specialCharacter = '!@#$%^&*()_+[]{}/><;:';
    const randomSpecialCharacter = Math.floor(Math.random() * specialCharacter.length);
    var storeChar = specialCharacter[randomSpecialCharacter]
    console.log(storeChar);
  } else {
    return // need to find out what to put here
  }

  if (!userChoiceLowercase, !userChoiceLowercase, !userChoiceNumbers, !userChoiceChar) {
    windows.alert("You must pick at least one of the previous options. Try again!")
  } // ????????
  
  //Questions: how do I select more than one option from the string?
  //Where do I actually store the values?
  //What to do for "else"?
  //how do i check for at least one input and make them redo if not?

  var MinLengthQuestion = window.prompt("What is the minimum length for your new password? Type a whole number greater than or equal to 8.");
  if (MinLengthQuestion >= 8) {
    console.log(MinLengthQuestion)
  } else {
    alert("Please enter a number greater than or equal to 8.")
  }

  var MaxLengthQuestion = window.prompt("What is the maximum length for your new password? Type a whole number less than or equal to 128.");

  if (MaxLengthQuestion <= 128) {
    console.log(MaxLengthQuestion)
  } else {
    alert("Please enter a number less than or equal to 128.")
  }

  //how do i make the password know to use the store variables for min and max length? 
}


