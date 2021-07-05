
function isPhoneValid(InputText) {
  const phoneNo = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (InputText.match(phoneNo)) {
    return true;
  } else {
    return false;
  }
}
function passwordRegex(password){

  var pass = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  if (password.match(pass)) {
		console.log('password matched');
    return true;
  } else {
		console.log('not matched');
    return false;
  }
}

/*
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
*/

function check() {
  const psw = document.getElementById("psw").value;
  const pswRepeat = document.getElementById("psw-repeat").value;
  if (psw.value != psw - repeat.value) {
    alert("Your password and confirmation password do not match.");
    pswRepeat.focus();
    return false;
  }
}

function isFormValid() {
  const email = document.getElementById("email").value;
  const psw = document.getElementById("psw").value;
  const pswRepeat = document.getElementById("psw-repeat").value;
  const fName = document.getElementById("fname").value;
  const lName = document.getElementById("lname").value;
  const city = document.getElementById("city").value;
  const phoneNo = document.getElementById("phonenum").value;
  const address = document.getElementById("address").value;

  if (
    typeof email == "string" &&
    email.includes("@") &&
    typeof psw == "string" &&
    psw == "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}" &&
    typeof pswRepeat == "string" &&
    pswRepeat == psw &&
    typeof fName == "string" &&
    typeof lName == "string" &&
    typeof city == "string" &&
    typeof phoneNo == "string" &&
    phoneNo == /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ &&
    typeof address == "text"
  )
  {
    return true;
  }
  return false;
}

const form = document.getElementById("form");
const submit = document.getElementById("submit");
submit.disabled = true;

function handleForm(event) {
	event.preventDefault();
	if (checkValidity()) {
		alert('form submitted');
	} else {
		alert('form not submitted');
	}
}

form.addEventListener("submit", handleForm);

function checkValidity() {
  const email = document.getElementById("email").value;
  const psw = document.getElementById("psw").value;
  const pswRepeat = document.getElementById("psw-repeat").value;
  const fName = document.getElementById("fname").value;
  const lName = document.getElementById("lname").value;
  const city = document.getElementById("city").value;
  const phoneNo = document.getElementById("phonenum").value;
  const address = document.getElementById("address").value;

  console.log(typeof email == "string");
  console.log(typeof psw == "string");
  console.log(typeof pswRepeat == "string");
  console.log(typeof fName == "string");
  console.log(typeof lName == "string");
  console.log(typeof city == "string");
  console.log(typeof phoneNo == "string");
  console.log(typeof address == "string");
  console.log(psw);

  if (
    typeof email == "string" &&
    email.includes("@") &&
    typeof psw == "string" &&
    passwordRegex(psw) &&
    typeof pswRepeat == "string" &&
    pswRepeat == psw &&
    typeof fName == "string" &&
    typeof lName == "string" &&
    typeof city == "string" &&
    typeof phoneNo == "string" &&
    isPhoneValid(phoneNo) &&
    typeof address == "string"
  ) {
		console.log('validated');
    return true;
  } else {
		console.log('not validated');
    return false;
  }
}

// function popUp(){
// 	console.log('popup function called');
//   console.log(checkValidity());
//   if(checkValidity() == true){
// 		alert("submit Succesfully");
//   } else {
// 		console.log('validation check failed');
// 	}
// }

function enableSubmitButton() {
	console.log('function called');
	if (submit.disabled) {
		submit.disabled = false;
		return;
	}
}

// $("form").submit(function(e){
//   console.log('form submitted')
//   e.preventDefault();
//       if (validateForm() === true) {
//          $('#studentmodal').modal('show');
//          //alert('the form is valid');
//        }
// return false;
// });