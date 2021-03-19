let generateBtn = document.querySelector("#generate");
//Defines arrays for inner most function to pull from for build
let lletters = "abcdefghijklmnopqrstuvwxyz".split(""); 
let uletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let numberc = "1234567890".split("");
  let specialc1 = ["'", '"', "\\"];
  let specialc2 = " !#$%&()*+,-./:;<=>?@[]^_`{|}~".split("");
let specialc = specialc1.concat(specialc2);

function writePassword() {
  
  let charcount = prompt("Specify password character count with number between 8 - 128: ");
  //Checks user input against criteria to ensure number between 8 - 128
  if ((isNaN(charcount))||(charcount === "")||(charcount.includes(" "))){
    alert("Please input a number value specifying a password length between 8 - 128 characters and try again.");
    return      
  } else { }
  
  let charcountn = parseInt(charcount);
  
  if ((charcountn > 128)||(charcountn < 8)){
    alert("Password character length must be between 8 - 128 characters-- please try again.");
    return
  } else { }
  //Asks user to select character set criteria
  let loinclude = confirm("Include lowercase character?");
  let upinclude = confirm("Include uppercase characters?");
  let numinclude = confirm("Include numerical characters?");
  let spcinclude = confirm("Include special characters?");

  if ((loinclude === false)&&(upinclude === false)&&(numinclude === false)&&(spcinclude === false)){
    alert("At least one character type must be selected. Please try again for different character type.");
    return
  } else { }
  //Calls internal functions and defines output for current function
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  function generatePassword(){
    //Creates randomized password with internal function created array and user set length
    let options = buildoptions();
    let output = "";
    let asize = options.length;

    for (let i = 0; i < charcountn; ++i) {
      output = output + options[(Math.floor(Math.random() * asize))];
    } return output;   
  
    function buildoptions(){
      //Builds possible characters to choose from based on user selected crieria
      let options = [];
      if (loinclude === true) {options = options.concat(lletters);}
      if (upinclude === true) {options = options.concat(uletters);}
      if (numinclude === true) {options = options.concat(numberc);}
      if (spcinclude === true) {options = options.concat(specialc);}
      return options
    }        
  }  
}

generateBtn.addEventListener("click", writePassword);