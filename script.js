// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


// Arrays of characters

let lletters = "abcdefghijklmnopqrstuvwxyz".split(""); 
let uletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let numberc = "1234567890".split("");
let specialc1 = ["'", '"', "\\"];
let specialc2 = " !#$%&()*+,-./:;<=>?@[]^_`{|}~".split("");
let specialc = specialc1.concat(specialc2);
let allc = lletters.concat(uletters, numberc, specialc)


function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  
  function generatePassword(){
    
    let charcount = prompt("Specify password character count with number between 8 - 128: ");
    let charcountn = parseInt(charcount, 10);
    
    
  
    
    
  
    let options = allc;
    var output = "";
    var asize = options.length;
    for (var i = 0; i < charcountn; ++i) {
      output = output + options[(Math.floor(Math.random() * asize))];
    } return output;    
    
  }  
  
}

// if ((charcountn < 129) && (charcountn > 7)) {
  
//  function buildoptions()
  
  
// }else {
//   alert("Character count must be between 8 - 128 characters!");
//   function generatePassword();
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


