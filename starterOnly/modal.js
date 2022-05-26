function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector("span.close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const birthdate = document.getElementById("birthdate");
const checkboxInput = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/* You display as "none" for the parent of parent of the close button,
which is "bground" */

	close.addEventListener("click", function() {
    this.parentElement.parentElement.style.display = 'none';
	});

  /* You set as an attribute "required" with the "required" parametre to the
  Id requested, so that the form would be mandatory */

  firstName.setAttribute("required", "required");


  lastName.setAttribute("required", "required");


  birthdate.setAttribute("required", "required");

  /* You set as an attribute "minlength" with "2" as a parametre to the
  Id requested, so that the form would require minimum two caracters to be functional */

  lastName.setAttribute("minlength", "2");
  


  

