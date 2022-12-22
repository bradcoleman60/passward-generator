//The function below "passwordGenerator" creates a random password based on inputs from the visitor.  The inputs inlcude the length (as to be 8 or more characters but not more than 128 characters), and 4 classes of characters (Numbers, Upper case letters, Lower case letters or symbols).  See comments on specific elements of the code below. 


function passwordGenerator() {
  let passwordLength = prompt("Enter a password length of at least 8 characters but no longer than 128 characters");

//If statememt validates that the desired password length is at least 8 and no more than 128.  If this is not validated, an alert is made and the vistor is sent back to the beginning of the process.
  if (passwordLength <8 || passwordLength > 128)
  { 
    alert("PLEASE GO BACK AND ENTER A PASSWORD AT LEAST 8 CHARACTERS BUT NO MORE THANT 128.")
    passwordGenerator()
  } 
  
//If the password length is validated the visitor is asked to confirm whether to include 4 classes of characters.  The code below stores these confirmations. (Note these are boolean answers)  
  else {
  console.log(passwordLength)
  let useNumbers = confirm("Do you want to include NUMBERS in your password?");
  let useLower = confirm("Do you want to use LOWER case letters in your password?");
  let useUpper =  confirm("Do you want to use UPPER case letters in your password?"); 
  let useSymbols = confirm("Do you want to use SYMBOLS in your password?");

//To ensure at least one character type is used, the following if statement is used to check that at least one character type has been selected.  If this not validated, an alert is made and the vistor is sent back to the beginning of the process.

  if (!useNumbers && !useLower && !useUpper && !useSymbols) {
    alert("PLEASE GO BACK AND ENSURE THAT AT LEAST ONE CHARACTER TYPE IS SELECTED.")
    passwordGenerator()
}
  else{
 
//If the character sets are validated, the function continues below.  The following lines define variables that contain strings of the 4 character types.  Additionally. "stringToChooseFrom" established a variable that will ultimately hold all the characters used to choose the password from. 

  var Numberstring =['0123456789'];
  var lowerString = ['abcdefghijklmnopqrstuvwxyz'];
  var upperstring = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  var symbolstring = ['!@#$%^&*()][/><?+']
  var stringToChooseFrom = ""
  
//The following IF statement iterates on the 4 boolean (character type) variables and if TRUE then appends "stringToChooseFrom" with the associated character string. 

  if (useNumbers){
    stringToChooseFrom = stringToChooseFrom + Numberstring
  } if(useLower){
    stringToChooseFrom = stringToChooseFrom + lowerString
  } if(useUpper){
    stringToChooseFrom = stringToChooseFrom + upperstring
  } if (useSymbols){
    stringToChooseFrom = stringToChooseFrom + symbolstring
  }
  
  //Establishes the variable "passwordResult".  This will ultimately contain the password desired. 
  var passwordResult = ""
  
  //Established the variable to hold the length of the stringToChoseFrom, needed in the calculation of the random string generator. 
  var stringLength = stringToChooseFrom.length;
  
  //This FOR loop iterates for a number of times equal to the desired password length. In each loop, a random number between zero (Math.floor) and the stringLength and then the "charAt" function selects the character in the position of that random number.  The "+=" operator increments the password string with each loop and the loop is finisghed when the desired password length is reached. 
  for (let i = 0; i < passwordLength; i++) {
      passwordResult += stringToChooseFrom.charAt(Math.floor(Math.random() * stringLength));
    }

  //This command passes the resultant password to the HTML element 'password' to render the password back to the webpage so the visitor can view.  
    document.getElementById('password').innerHTML = passwordResult;
  
  //Consol.logs useful for de-bugging:
  console.log("Password Length: "+ passwordLength)
  console.log("Use Numbers: " + useNumbers)
  console.log("Use Lower: " + useLower)
  console.log("Use Upper: " + useUpper)
  console.log("Use Symbols: " + useSymbols)
  console.log("The ultimate string to choose characters from: "+ stringToChooseFrom)
  console.log("The length of the String to Choos From: " + stringToChooseFrom.length)
  console.log("The generated password: " + passwordResult)
}
}
}
