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
  } else {
    
  }
  
  let charcountn = parseInt(charcount, 10);
  
  if ((charcountn > 128)||(charcountn < 8)) {
    alert("Password character length must be between 8 - 128 characters-- please try again.")
    return
  } else{
  }
  

  let loinclude = confirm("Include lowercase character?")
  let upinclude = confirm("Include uppercase characters?");
  let numinclude = confirm("Include number characters?");
  let spcinclude = confirm("Include special characters?");

  if ((loinclude === false)&&(upinclude === false)&&(numinclude === false)&&(spcinclude === false)){

    alert("At least one character type must be selected. Please try again for different character type.")
    return
  } else { 

  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  
  function generatePassword(){
    
    
  
    
    

    function buildoptions(){
      

      let options = [];

      if (loinclude === true) {
        
        options = options.concat(lletters)
      }
      
      if (upinclude === true) {
        
        options = options.concat(uletters)
      }
      
      if (numinclude === true) {
        
        options = options.concat(numberc)
      }
      
      if (spcinclude === true) {
        
        options = options.concat(specialc)
      }

      
      console.log(lletters)
      console.log(uletters)
      console.log(numberc)
      console.log(specialc)
      console.log(allc)
      console.log(options)
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


