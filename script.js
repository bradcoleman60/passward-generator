// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

function passwordLengthPrompt() {
  let passwordLength = prompt("Enter a password length longer than 8 but no longer than 128");
  if (passwordLength <8 || passwordLength > 128)
  { 
    alert("Please enter a password length that is at least 8 but no longer that 128")
    passwordLengthPrompt()
  } 
  
  else {
  console.log(passwordLength)
  let useNumbers = confirm("Do you want to include numbers in your password?");
  let useLower = confirm("Do you want to use LOWER case letters in your password?");
  let useUpper =  confirm("Do you want to use UPPER case letters in your password?"); 
  let  useSymbols = confirm("Do you want to use SYMBOLS in your password?");

  console.log("password Length: "+ passwordLength)
  console.log("Numbers: " + useNumbers)
  console.log("Lower: " + useLower)
  console.log("Upper: " + useUpper)
  console.log("Symbols: " + useSymbols)

  var Numberstring =['0123456789'];
  var lowerString = ['abcdefghijklmnopqrstuvwxyz'];
  var upperstring = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  var symbolstring = ['!@#$%^&*()][/><?+']
    
  var stringToChooseFrom = ""
  
  if (useNumbers){
    stringToChooseFrom = stringToChooseFrom + Numberstring
  } if(useLower){
    stringToChooseFrom = stringToChooseFrom + lowerString
  } if(useUpper){
    stringToChooseFrom = stringToChooseFrom + upperstring
  } if (useSymbols){
    stringToChooseFrom = stringToChooseFrom + symbolstring
  }
  console.log(stringToChooseFrom)
  console.log(stringToChooseFrom.length)
  
  
  let passwordResult = ""
  const stringLength = stringToChooseFrom.toString().length;
  
  for (let i = 0; i < passwordLength; i++) {
  
    passwordResult += stringToChooseFrom.toString().charAt(Math.floor(Math.random() * stringLength));
  
  }
    
  console.log(passwordResult)
  
}

}

