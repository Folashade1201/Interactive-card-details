function validate() {
    var letters= /^[A-Za-z]+$/;
    var input1 = document.getElementById("box1");
    var error1= document.getElementById('error1');
    if (input1.value.match(letters)){
      error1.textContent = "";
      input1.style.border="1px solid purple";  
      return true 
 }
  else {
    error1.textContent = "Wrong format, letters only"
      error1.style.color="red"   
      input1.style.border="1px solid red";
       return false
   }    
  }

function validateAll() { 
  return validate() && errorMessage0() && errorMessage()
}


 function errorMessage0() {
  var letters= /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
  var alphanumeric = /^[0-9a-zA-Z]+$/;
  var input2 = document.getElementById("box2"); 
  var error = document.getElementById('error');
  if (input2.value.match(letters) ||input2.value.match(letters && numbers)  )
  {
   error.textContent = "Wrong format, numbers only"
   error.style.color="red"
   input2.style.border="1px solid red";
   return false
  }
  else  {
   error.textContent= ""
   input2.style.border="1px solid purple";
  }
  return true
 }


 function errorMessage() {
  var letters= /^[A-Za-z]+$/;
  var empty  = ""
  var input3 = document.getElementById('box3');
  var input4 = document.getElementById('box4');
  var input5 = document.getElementById('box5');
  var error2 = document.getElementById('error2');
  var error3 = document.getElementById('error3');
  if (input3.value.match(letters) ||input3.value.match(empty) || input4.value.match(letters) || 
  input4.value.match(empty) ||input5.value.match(letters)|| input5.value.match(empty)) 
  {
   error2.textContent = "Can't be blank";
   error2.style.color="red";
   error3.textContent = "Can't be blank";
   error3.style.color="red";
   input3.style.border="1px solid red";
   input4.style.border="1px solid red";
   input5.style.border="1px solid red";
    return false
  }
  else {
   error2.textContent= ""
   error3.textContent= ""
   input3.style.border="1px solid purple";
   input4.style.border="1px solid purple";
   input5.style.border="1px solid purple";
  }
  return true
 }
 
