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

var max = 10;
var min = 0;
var countOfnumbers = 0;



for (var i = 0; i <= countOfnumbers; i++) {
  var randomNumber = (Math.trunc(Math.random() * 100));
  if (randomNumber < max && randomNumber > min)
  {
  console.log (i +" - "+(randomNumber))
    } 
  else {i--}
}

// This generates the value of the position that is created by randomNumber
var myarray = ["plane","train","car","boat", "bike", "sled"];

var selectedValue = myarray[randomNumber];

console.log(selectedValue)


//Creating an array for my password generator

var NumbersOnly = [0,1,2,3,4,5,6,7,8,9];
var LettersOnly = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbols = ["\~","\!","\@","\#","\$","\%","^","\&","*","(",")","_","+","\=","-",";",":","{","}","[","]","\/","<",">"];

var totalarray = NumbersOnly.concat(LettersOnly,symbols);

console.log(totalarray);

document.write(totalarray);
