/*The function below "passwordGenerator" creates a random password based on inputs from the visitor.  
The inputs include the length (as to be 8 or more characters but not more than 128 characters), and 
4 classes of characters (Numbers, Upper case letters, Lower case letters or symbols).  See comments 
on specific elements of the code below. */

function passwordGenerator() {
  
  let passwordLength = prompt("Enter a password length of at least 8 characters but no longer than 128 characters");
  
/*This IF statement checks whether the vistor cancels the prompt for a password length.  If canceled, then 
the function passwordGenerator is stopped and the prompt window is removed from the browser window*/  
  if (passwordLength === null){ 
    return;
  }

/*This IF statement validates that the desired password length is at least 8 and no more than 128 and whether.
it is a non number.  If this is not validated, an alert is made and the visitor is sent back to the beginning 
of the process. */
  if (passwordLength <8 || passwordLength > 128 || isNaN(passwordLength))
  { 
    alert("PLEASE GO BACK AND ENTER A PASSWORD AT LEAST 8 CHARACTERS BUT NO MORE THAN 128.")
    passwordGenerator()
  } 
  
/*If the password length is validated the visitor is asked to confirm whether to include 4 different classes of 
characters.  The code below stores these confirmations. (Note these are Boolean answers)  */
  else {
  console.log(passwordLength)
  let useNumbers = confirm("Do you want to include NUMBERS in your password?");
  let useLower = confirm("Do you want to use LOWER case letters in your password?");
  let useUpper =  confirm("Do you want to use UPPER case letters in your password?"); 
  let useSymbols = confirm("Do you want to use SYMBOLS in your password?");

/*To ensure at least one character type is used, the following if statement is used to check that at least 
one character type has been selected.  If this not validated, an alert is made and the visitor is sent back 
to the beginning of the process.*/
  if (!useNumbers && !useLower && !useUpper && !useSymbols) {
    alert("PLEASE GO BACK AND ENSURE THAT AT LEAST ONE CHARACTER TYPE IS SELECTED.")
    passwordGenerator()
}
  else{
 
/*If the character sets are validated, the function continues below.  The following lines define 
variables that contain strings of the 4 character types.  Additionally. "stringToChooseFrom" established 
a variable that will ultimately hold all the characters used to choose the password from. */
  var Numberstring =['0123456789'];
  var lowerString = ['abcdefghijklmnopqrstuvwxyz'];
  var upperstring = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  var symbolstring = ['!@#$%^&*()][/><?+']
  var stringToChooseFrom = ""
  
/*The following IF statement iterates on the 4 Boolean (character type) variables and if TRUE then 
appends "stringToChooseFrom" with the associated character string. */
  if (useNumbers) {
    stringToChooseFrom += Numberstring;
  }  if (useLower) {
    stringToChooseFrom += lowerString;
  }  if (useUpper) {
    stringToChooseFrom += upperstring;
  }  if (useSymbols){
    stringToChooseFrom += symbolstring;
  }
  
//Establishes the variable "passwordResult".  This will ultimately contain the password desired. 
  var passwordResult = ""
  
/*Establishes the variable to hold the length of the stringToChoseFrom, needed in the calculation of 
the random string generator. */
  var stringLength = stringToChooseFrom.length;
  
/*This FOR loop iterates for a number of times equal to the desired password length. In each loop, a 
random number between zero and the stringLength and then the "charAt" method selects the character in 
the position of that random number.  The "+=" operator increments the password string with each loop and 
the loop is finished when the desired password length is reached. The "Math.Random()" method is a built-in 
function that selects a random number between 0 and 1.  The random number is multiplied by the number of 
characters in the string to ensure that each character has a chance to be randomly selected.  The "Math.floor"
 method is a built-in method that rounds down the random number to a whole number, since  the "charAt" 
 function can only use whole numbers. */
  for (let i = 0; i < passwordLength; i++) {
      passwordResult += stringToChooseFrom.charAt(Math.floor(Math.random() * stringLength));
    }

/*This command passes the resultant password to the HTML element 'password' to render the password back to 
the webpage so the visitor can view.  */
    document.getElementById('password').innerHTML = passwordResult;

}
}
}
