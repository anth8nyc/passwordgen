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
    
    if ((charcountn > 128)||(charcountn < 8)) {
      alert("Password character length must be between 8 - 128 characters. Please try again")
      return
    } else{
    }
  
    
    

    function buildoptions(){
      
      let loinclude = confirm("Include lowercase character? \nLowercase letters are used by default if no character type is selected.")
      let upinclude = confirm("Include uppercase characters?");
      let numinclude = confirm("Include number characters?");
      let spcinclude = confirm("Include special characters?");
      
      
      if ((loinclude === true) && (upinclude === true) && (numinclude === true) && (spcinclude === true)) {
        
        let options = lletters.concat(uletters, numberc, specialc) 
        return options       
        
      } else if ((loinclude === true) && (upinclude === true) && (numinclude === true) && (spcinclude === false)){
        
        let options = lletters.concat(uletters, numberc)
        return options;
        
      } else if ((loinclude === true) && (upinclude === true) && (numinclude === false) && (spcinclude === false)){
        
        let options = lletters.concat(uletters)
        return options
        
      } else if ((loinclude === true) && (upinclude === false) && (numinclude === false) && (spcinclude === false)){
        
        let options = lletters
        return options
        
      } else if ((loinclude === true) && (upinclude === false) && (numinclude === true) && (spcinclude === true)){
        
        let options = lletters.concat(numberc, specialc)
        return options
        
      } else if ((loinclude === true) && (upinclude === false) && (numinclude === true) && (spcinclude === false)){
        
        let options = lletters.concat(numberc, specialc)
        return options
        
      } else if ((loinclude === true) && (upinclude === false) && (numinclude === false) && (spcinclude === true)){
        
        let options = lletters.concat(specialc)
        return options
        
      } else if ((loinclude === true) && (upinclude === true) && (numinclude === false) && (spcinclude === true)){
        
        let options = lletters.concat(uletters, specialc)
        return options

      } else if ((loinclude === false) && (upinclude === true) && (numinclude === true) && (spcinclude === true)) {
        
        let options = uletters.concat(numberc, specialc) 
        return options       
        
      } else if ((loinclude === false) && (upinclude === true) && (numinclude === true) && (spcinclude === false)){
        
        let options = uletters.concat(numberc)
        return options;
        
      } else if ((loinclude === false) && (upinclude === true) && (numinclude === false) && (spcinclude === false)){
        
        let options = (uletters)
        return options
        
      } else if ((loinclude === false) && (upinclude === false) && (numinclude === false) && (spcinclude === false)){
        
        alert("At least one character type must be selected. Using default (lowercase only) for password generation. Please try again for different character type.")
        let options = lletters
        return options
        
      } else if ((loinclude === false) && (upinclude === false) && (numinclude === true) && (spcinclude === true)){
        
        let options = numberc.concat(specialc)
        return options
        
      } else if ((loinclude === false) && (upinclude === false) && (numinclude === true) && (spcinclude === false)){
        
        let options = numberc
        return options
        
      } else if ((loinclude === false) && (upinclude === false) && (numinclude === false) && (spcinclude === true)){
        
        let options = specialc
        return options
        
      } else if ((loinclude === false) && (upinclude === true) && (numinclude === false) && (spcinclude === true)){
        
        let options = uletters.concat(specialc)
        return options

      } else {

      }  
      return            
    }       
      
    
    let options = buildoptions();
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


