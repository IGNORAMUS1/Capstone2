//for responsiveness of the hamburger icon
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } 
  else {
    x.className = "topnav";
  }
}

let password = document.getElementById("validationCustom03"), confirm_password = document.getElementById("validationCustom04"), confirmPasswordFeedback = document.getElementById("confirmPasswordFeedback");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirmPasswordFeedback.innerHTML = "The passwords are not alike";
  } 
  else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;