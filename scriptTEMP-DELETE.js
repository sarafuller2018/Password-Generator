  //Questions: how do I select more than one option from the string?



  // get input
  //parse through answer choices after questions 
  //store them in an object
  //then randomize
  //then display

  // get then validate then pass to generate function with several steps - build pool of validate characters and randomly select for the length of the password

  var generatePassword = function () {
    var userChoiceLowercase = window.confirm("Would you like to include a lowercase letter(s)?");
    var userChoiceUppercase = window.confirm("Would you like to include a uppercase letter(s)?");
    var userChoiceNumbers = window.confirm("Would you like to include a number(s)?");
    var userChoiceChar = window.confirm("Would you like to include a special character(s)?");
    var userChoiceLength = window.prompt("What is the length for your new password? Type a whole number between 8 and 128.");
  
    if (userChoiceLowercase === false && userChoiceUppercase === false && userChoiceNumbers === false && userChoiceChar === false) {
      alert("You must choose at least one character type!")
    }
  
    if (userChoiceLength < 8) {
      alert("Please enter a number between 8 and 128.")
    }
  
    if (userChoiceLength > 128) {
      alert("Please enter a number between 8 and 128.")
    }
  
    var characterPool = {
      Lowercase: userChoiceLowercase,
      Uppercase: userChoiceUppercase,
      Numbers: userChoiceNumbers,
      SpecCharacters: userChoiceChar,
      Length: userChoiceLength
    }
    console.log(characterPool);
   
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
  
  for (var i = 0; i < characterPool.Length; i++) {
      const passwordRandomizer = Math.floor(Math.random() * characterOptions.length);
      var finalPassword = "";
      finalPassword += characterOptions[passwordRandomizer];
    }
  
    return finalPassword;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);