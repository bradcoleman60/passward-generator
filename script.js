
function passwordGenerator() {
  let passwordLength = prompt("Enter a password length of at least 8 characters but no longer than 128 characters");
  if (passwordLength <8 || passwordLength > 128)
  { 
    alert("PLEASE GO BACK AND ENTER A PASSWORDD AT LEAST 8 CHARACTERS BUT NO MORE THANT 128")
    passwordGenerator()
  } 
  
  else {
  console.log(passwordLength)
  let useNumbers = confirm("Do you want to include numbers in your password?");
  let useLower = confirm("Do you want to use LOWER case letters in your password?");
  let useUpper =  confirm("Do you want to use UPPER case letters in your password?"); 
  let  useSymbols = confirm("Do you want to use SYMBOLS in your password?");

  if (!useNumbers && !useLower && !useUpper && !useSymbols) {
    alert("PLEASE GO BACK AND ENSURE THAT AT LEAST ONE CHARACTER TYPE IS SELECT")
    passwordGenerator()
}
  else{
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
  document.getElementById('password').innerHTML = passwordResult;
}
//  document.getElementById('password').innerHTML = passwordResult;
}
}
