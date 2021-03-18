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
  
  let charcount = prompt("Specify password character count with number between 8 - 128: ");
  if (isNaN(charcount)) {
    alert("Please input a number value specifying a password length between 8 - 128 characters and try again.")
    return      
  } else {}
  
  let charcountn = parseInt(charcount, 10);
  
  if ((charcountn > 128)||(charcountn < 8)) {
    alert("Password character length must be between 8 - 128 characters-- please try again.")
    return
  } else{}
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  function generatePassword(){
    
    
    
  
    
    

    function buildoptions(){
      
      let loinclude = confirm("Include lowercase character?")
      let upinclude = confirm("Include uppercase characters?");
      let numinclude = confirm("Include number characters?");
      let spcinclude = confirm("Include special characters?");
      
      let q1 = [""];
      let q2 = [""];
      let q3 = [""];
      let q4 = [""];
      

      if (loinclude === true) {
        q1 = lletters.concat(q1)
      }else{}
      
      if (upinclude === true) {
        q2 = uletters.concat(q2)
      }else{}
      
      if (numinclude === true) {
        q3 = numberc.concat(q3)
      }else{}
      
      if (spcinclude === true) {
        q4 = specialc.concat(q4)
      }else{}

      if ((loinclude === false)&&(upinclude === false)&&(numinclude === false)&&(spcinclude === false)){

        alert("At least one character type must be selected. Please try again for different character type.")
        return
      } else { 

      }
      
      let options = q1.concat(q2, q3, q4)
      return options

    }       
      
    let options = buildoptions();
    var output = "";
    var asize = options.length;
    for (var i = 0; i < charcountn; ++i) {
      output = output + options[(Math.floor(Math.random() * asize))];
    } return output;    
    
  }  

}

generateBtn.addEventListener("click", writePassword);

// if ((charcountn < 129) && (charcountn > 7)) {
  
//  function buildoptions()
  
  
// }else {
//   alert("Character count must be between 8 - 128 characters!");
//   function generatePassword();
// }

// Add event listener to generate button


