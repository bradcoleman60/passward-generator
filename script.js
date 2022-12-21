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




//This generates a total number of random number [countOfnumber] between a min and max

var max = 138;
var min = 0;
var countOfnumbers = 33;


// for (var i = 0; i <= countOfnumbers; i++) {
//   var randomNumber = (Math.trunc(Math.random() * 100));
//   if (randomNumber < max && randomNumber > min)
//   {
//   console.log (i +" - "+(randomNumber))
//     } 
//   else {i--}
// }


//Creating an array for my password generator

var NumbersArray = [0,1,2,3,4,5,6,7,8,9];
var LowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var UpperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var SpecialSymbolsArray = ["\~","\!","\@","\#","\$","\%","^","\&","*","(",")","_","+","\=","-",";",":","{","}","[","]","\/","<",">"];

// var totalarray = NumbersArray.concat(LowerCaseArray,UpperCaseArray,SpecialSymbolsArray);

// console.log(totalarray);

//Create and IF Statement that concatenates the arrays needed to generate random password based on user input

var UseNumbersArray = true;
var UseLowerCaseArray = true;
var UseUpperCaseArray = true;
var UseSpecialSymbolArray = true;

// if (UseNumbersArray())

// if (UseNumbersArray && UseLowerCaseArray && UseUpperCaseArray && UseSpecialSymbolArray){

//   var totalarray = NumbersArray.concat(LowerCaseArray,UpperCaseArray,SpecialSymbolsArray);
//   console.log(totalarray)
// }


// console.log(NumbersArray.length)
// console.log(LowerCaseArray.length)
// console.log(UpperCaseArray.length)
// console.log(SpecialSymbolsArray.length)

var AllCharacters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","\~","\!","\@","\#","\$","\%","\^","\&","\*","\(","\)","_","+","\=","-","\"",";",":","{","}","[","]","\/","<",">",0,1,2,3,4,5,6,7,8,9,
]

function containsUppercase(str) {
  return /[A-Z]/.test(str);
}

function containsLowercase(str) {
  return /[a-z]/.test(str);
}

function containsNumbers(str) {
  return /[0-9]/.test(str);
}

function containsSymbols(str) {
  return /[^a-zA-Z0-9]/.test(str);
}

for (i=0; i<(AllCharacters.length); i++){
  if (containsSymbols(AllCharacters[i])) 
  console.log(AllCharacters[i])
  
}



// console.log(AllCharacters)
