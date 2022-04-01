// Assignment Code
var generateBtn = document.querySelector("#generate");

// password inputs
var passArr = [];
var upperCsArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCsArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','y','u','v','w','x','y','z'];
var numArr = ['0','1', '2','3', '4', '5','6','7','8','9']
var symArr = ['!','@','#','$','%','^','&','*','(',')','[',']'];

// gen password function
function generatePassword(){
  var password = "";
  for(var i = 0; i < numOfChar; i++) {
    var randoPass = Math.floor(Math.random() * passArr.length);
    var password = password + passArr[randoPass];
  }
  return password;
  
}

// window prompts

function windowPrompts() {
  
  numOfChar = parseInt(prompt(`How Many Characters in Password.(Must Be Between 8-128 Digits)`));
  if(isNaN(numOfChar) || numOfChar < 8 || numOfChar > 128) {
     alert('Must Be Number Between 8-128 digits.');
     return windowPrompts();
  }
 
  if(confirm('Uppercase letters in your password')) {
      passArr = passArr.concat(upperCsArr);
  }
  if(confirm('Lowercase letters in your password')) {
      passArr = passArr.concat(lowerCsArr);
  }  
  if(confirm('Numbers in your password')){
      passArr = passArr.concat(numArr);
  }  
  if(confirm('Symbols in your password')) {
      passArr = passArr.concat(symArr);
  }   
  return true;

}

// Write password to the #password input
function writePassword() {
  var correctPrompts = windowPrompts();
  if (correctPrompts) {
  var generatedPass = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatedPass;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


