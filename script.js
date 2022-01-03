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

var lower = `a b c d e f g h i j k l m n o p q r s t u v w x z`;
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","]","}","|","/",":",";","<",",",">",".","?"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var mixedArray = [""];


function generatePassword (){
  var passwordText= "";

  var userLength=window.prompt("Pick a character length for your password that is between 8 and 128.");
  var userUpper=window.confirm("Would you like to use upper cases in your password?");
  var userNumbers=window.confirm("Would you like to use numbers in your password?");
  var userSymbols=window.confirm("Would you like to use symbols in your password?");

  for (let i = 0; i < lower; i++) {
  passwordText = lower[Math.floor((Math.random() * lower.length))];
    
  }
  return passwordText;
}