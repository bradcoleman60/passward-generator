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




//This generates a total number of random number [countOfnumber] between a min and max

// var max = 138;
// var min = 0;
// var countOfnumbers = 33;


// for (var i = 0; i <= countOfnumbers; i++) {
//   var randomNumber = (Math.trunc(Math.random() * 100));
//   if (randomNumber < max && randomNumber > min)
//   {
//   console.log (i +" - "+(randomNumber))
//     } 
//   else {i--}
// }


//Creating an array for my password generator


// var totalarray = NumbersArray.concat(LowerCaseArray,UpperCaseArray,SpecialSymbolsArray);

// console.log(totalarray);

//Create and IF Statement that concatenates the arrays needed to generate random password based on user input

// var UseNumbersArray = true;
// var UseLowerCaseArray = true;
// var UseUpperCaseArray = true;
// var UseSpecialSymbolArray = true;

// if (UseNumbersArray())

// if (UseNumbersArray && UseLowerCaseArray && UseUpperCaseArray && UseSpecialSymbolArray){

//   var totalarray = NumbersArray.concat(LowerCaseArray,UpperCaseArray,SpecialSymbolsArray);
//   console.log(totalarray)
// }


// console.log(NumbersArray.length)
// console.log(LowerCaseArray.length)
// console.log(UpperCaseArray.length)
// console.log(SpecialSymbolsArray.length)

// var AllCharacters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","\~","\!","\@","\#","\$","\%","\^","\&","\*","\(","\)","_","+","\=","-","\"",";",":","{","}","[","]","\/","<",">",0,1,2,3,4,5,6,7,8,9,
// ]

// var xtring = value(AllCharacters);

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

}
}

  
//ORIGINAl CODE

  var Numberstring =['0123456789'];
  var lowerString = ['abcdefghijklmnopqrstuvwxyz'];
  var upperstring = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  var symbolstring = ['!@#$%^&*()][/><?+']
  
  var useNumbers = false
  var useLower = false
  var useUpper = true
  var useSymbols = false
  var passwordLength = 100
  
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
  
  function generatePasswordTwo(length) {
  let result = ' '
  const stringLength = stringToChooseFrom.toString().length;
  for (let i = 0; i < length; i++) {
  
    result += stringToChooseFrom.toString().charAt(Math.floor(Math.random() * stringLength));
  
  }
  
  return result;
  
  }
  
  console.log(stringToChooseFrom.toString().length)
  console.log(generatePasswordTwo(passwordLength))


// var resultTwo = ''
// for (i=0; i <passwordLength; i++){
// resultTwo += toString.charAt(Math.floor(Math.random()* stringToChooseFrom.lenth))

// }

// console.log(resultTwo)

