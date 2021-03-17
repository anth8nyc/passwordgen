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


// Arrays of characters

let lletters = "abcdefghijklmnopqrstuvwxyz".split("") 
let uletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
let numberc = "1234567890".split("")
let specialc = " !U+0022#$%&U+0027()*+,-./:;<=>?@[\]^_`{|}~".split("")

console.log(lletters)
console.log(uletters)
console.log(numberc)
console.log(specialc)

