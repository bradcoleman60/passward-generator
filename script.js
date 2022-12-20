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







//Initial Discovery of creating random numbers
var randNum = Math.random();

// This creates a random integer
console.log (randNum)

//This creates a random whole number less than 1000
console.log (Math.trunc(randNum * 1000))

//This creates a random number between zero and 999 and does it 101 separate times
// for (var x = 0; x <= 100; x++) {
//   console.log (x +" - "+(Math.trunc(Math.random() * 1000)))
// }

//This generates a total number of random number [countOfnumber] between a min and max

var max = 10000;
var min = 5000;
var countOfnumbers = 100;

for (var x = 0; x <= countOfnumbers; x++) {
  var randomNumber = (Math.trunc(Math.random() * 10000));
  if (randomNumber < max && randomNumber > min)
  {
  console.log (x +" - "+(randomNumber))
    } 
  else {x--}
}


