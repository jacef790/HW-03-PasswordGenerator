// Assignment Code
var generateBtn = document.querySelector("#generate");

var passArr = [];
var upperCsArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCsArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','y','u','v','w','x','y','z'];
var numArr = ['0','1', '2','3', '4', '5','6','7','8','9']
var symArr = ['!','@','#','$','%','^','&','*','(',')','[',']'];


function generatePassword(){
  
}

function windowPrompts() {
  numOfChar = parseInt(prompt(`How Many Characters in Password.(Must Be Between 8-128)`));
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


